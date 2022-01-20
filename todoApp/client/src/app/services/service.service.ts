import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getTodos():Observable<any> {
    return this.http.get('http://localhost:8080/task');
  }

  addTodo(data):Observable<any> {
    return this.http.post('http://localhost:8080/task', data);
  }

  getTodoById(id):Observable<any> {
    return this.http.get('http://localhost:8080/task/' + id);
  }
  updateTodo(id, data):Observable<any> {
    return this.http.patch('http://localhost:8080/task/'+id, data);
  }
  deleteTodo(id):Observable<any> {
    return this.http.delete('http://localhost:8080/task/'+id);
  }
  //retrive product form db
  getProducts():Observable<any> {
    return this.http.get('http://localhost:8080/product');
  }
  createOrder(data):Observable<any>{
    return this.http.post("http://localhost:8080/payment", data);
  }
}
