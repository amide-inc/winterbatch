import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
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

}
