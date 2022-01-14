import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
declare var $:any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private todoService:ServiceService,
    private activatedRoute:ActivatedRoute
    ) {
    this.editForm =  this.fb.group({
      title :[""],
      description: [""]
    });
   }

  ngOnInit(): void {
    this.getTodoById();
  }
  editTodo(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const data = {
      title : this.editForm.get('title').value,
      description: this.editForm.get('description').value
    }
    
   this.todoService.updateTodo(id, data)
       .subscribe(
         res => {
          $('.toast').toast('show')
          setTimeout(() => {
            $('.toast').toast('hide')
          }, 3000)
         console.log(res);
       },
       err => {
         console.log(err);
       }
       )
  }

  getTodoById() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoService.getTodoById(id)
        .subscribe((res) => {
          if(res.success) {
            this.editForm.get('title').setValue(res.data.title);
            this.editForm.get('description').setValue(res.data.description);
          }
        })
  }

}
