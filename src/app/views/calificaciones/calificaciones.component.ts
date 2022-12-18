import Swal from "sweetalert2"
import { QuestionService } from 'src/app/services/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  constructor(private questionService: QuestionService) { }
  user:any = JSON.parse(window.localStorage.getItem("usuario")!)
  nombre:string=this.user.nombre
  notas:any[]=[]

  ngOnInit(): void {

    Swal.fire({
      title: "Cargando calificaciones, un momento por favor...",
      didOpen: () =>{
        Swal.showLoading(null);
      }
    })
    this.questionService.getActividades(this.user.codigo).subscribe(res=>{
      this.notas=res[0].actividadResponseList
      Swal.close()
    })
  }
  approved(note:number):boolean{
    if (note>=3){
      return true
    }
    return false
  }




}
