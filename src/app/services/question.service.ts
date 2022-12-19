import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }
  url="https://ovaeducativa-backend-production.up.railway.app/actividades/";
  getQuestionJson(){
    return this.http.get<any>("assets/questions.json");
  }

  updateQuestion(notes:any):Observable<any>{
    return this.http.put(this.url+"updatenota",notes);
  }

  getActividades(codigo:string):Observable<any>{
    return this.http.get(this.url+codigo)
  }
}