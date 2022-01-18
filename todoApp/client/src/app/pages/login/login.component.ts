import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  alertMessage:string = '';
  alertClass:string  = 'd-none'
  constructor(
    private fb:FormBuilder,
    private authService:AuthService
    ) {
    this.loginForm=  this.fb.group({
      email: ["", Validators.required],
      password:["", Validators.required]
    });
   }

  ngOnInit(): void {
  }
  login(){
    if(this.loginForm.valid){
    const data = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
    
    this.authService.login(data)
        .subscribe(
          res => {
             if(res.success) {
               this.alertClass = 'alert alert-success';
               this.alertMessage = 'Login Successfully';
               localStorage.setItem('token', res.token)
             }else {
              this.alertClass = 'alert alert-danger';
              this.alertMessage = res.message
             }
            
          }, 
          err => {
            alert("Server error")
          }
        )
   
  }else {
    this.alertClass = 'alert alert-danger'
    this.alertMessage = 'Invalid Form'
  }
  setTimeout(() => {
    this.alertClass = 'd-none';
    this.alertMessage = '';
   },3000)
}
 

}
