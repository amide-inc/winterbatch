import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
declare var $:any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data;
  constructor(private todoService:ServiceService) { }

  ngOnInit(): void {
    this.getTodods();
  }

  getTodods() {
    this.todoService.getTodos()
        .subscribe(
          (res) => {
            if(res.success) {
              this.data = res.data;
            }
          },
          (err) => {
            alert("error");
          }
        )
  }
  
  deleteTodo(id) {
    this.todoService.deleteTodo(id)
        .subscribe((res) => {
          console.log(res);
          if(res.success) {
            this.getTodods();
            $('.toast').toast('show')
            setTimeout(() => {
              $('.toast').toast('hide')
            }, 3000)
          }
        })
  }
}
