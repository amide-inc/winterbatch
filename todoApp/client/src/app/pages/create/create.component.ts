import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../../services/service.service';

declare var $:any;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
   createForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private todoService:ServiceService
    ) {
    this.createForm =  this.fb.group({
      title :[""],
      description: [""]
    });
   }

  ngOnInit(): void {
  }
  saveTodo(){
    const data = {
      title : this.createForm.get('title').value,
      description: this.createForm.get('description').value
    }
    
   this.todoService.addTodo(data)
       .subscribe(
         res => {
          $('.toast').toast('show')
          setTimeout(() => {
            $('.toast').toast('hide')
            this.createForm.reset();
          }, 3000)
         console.log(res);
       },
       err => {
         console.log(err);
       }
       )
  }

}
