import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  nombreUsuario = this.getNombreUser();

  getNombreUser() {
    let user = JSON.parse(localStorage.getItem("usuario")!);
    return user;
  }

  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 120;
  initial_value=120
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: number = 0;
  isQuizCompleted : boolean = false;
  isAnswerCompleted : boolean = false;
  id:string
  theme:string=""
  user:any = JSON.parse(window.localStorage.getItem("usuario")!)

  constructor(private questionService: QuestionService,private aRouter: ActivatedRoute) {

    this.id = aRouter.snapshot.paramMap.get('idTema')!;

   }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.themes[Number(this.id)-1].questions;
        this.theme = res.themes[Number(this.id)-1].theme;
      })
  }
  nextQuestion() {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Una vez avances a la siguiente pregunta, ya no podrás retroceder, por lo tanto no sumará en la calificación final.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, siguiente pregunta'
    }).then((result) => {
      if (result.isConfirmed) {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }
    })
  }
  previousQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, option: any) {
    console.log("XXXXXXXXXX",currentQno);
   

    if (option.correct ) {
      if(!this.isAnswerCompleted){
        this.points += 0.5;
        this.isAnswerCompleted=true
        this.correctAnswer++;
        setTimeout(() => {
          this.currentQuestion++;
          this.resetCounter();
          this.getProgressPercent();
        this.isAnswerCompleted=false
        }, 1000);
      }

    } else {
      if(!this.isAnswerCompleted){
        this.isAnswerCompleted=true
      // this.points -= 10;
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
        this.isAnswerCompleted=false

      }, 1000);
    }

    }
    if(currentQno === this.questionList.length){
      this.isQuizCompleted=true
      let nota = {
        "codigo":this.user.codigo,
        "idActividad":Number(this.id),
        "calificacion":this.points
      }
      console.log(nota);
      this.stopCounter();
      this.questionService.updateQuestion(nota).subscribe(resp=>{
      })
    }
  }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = this.initial_value;
          // this.points -= 10;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = this.initial_value;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = this.initial_value;
    this.currentQuestion = 0;
    this.progress = 0;

  }
  getProgressPercent() {
    this.progress = Math.round(((this.currentQuestion / this.questionList.length) * 100));
    return this.progress;

  }
}