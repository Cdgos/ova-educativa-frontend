import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://ovaeducativa-backend-production.up.railway.app/estudiante/login';

  constructor(private http: HttpClient) { }

  login(user:any):Observable<any>{
    return this.http.post(this.apiUrl, user)
  }

}
