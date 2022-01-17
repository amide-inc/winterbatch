import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  // ng g service services/auth
  signup(data):Observable<any>{
    return this.http.post("http://localhost:8080/auth/signup", data);
  }
}
