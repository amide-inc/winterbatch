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
  login(data):Observable<any> {
    return this.http.post("http://localhost:8080/auth/login", data);
  }

  getProfile():Observable<any> {
    const headers = {
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    }
    return this.http.get("http://localhost:8080/auth/profile", {headers: headers});
  }
}
