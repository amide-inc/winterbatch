import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private authService:AuthService
    ) {
    this.signupForm =  this.fb.group({
      displayName :[""],
      email: [""],
      password:[""]
    });
   }

  ngOnInit(): void {
  }
  signup(){
    const data = {
      displayName : this.signupForm.get('displayName').value,
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('password').value
    }
    this.authService.signup(data)
        .subscribe((res) => {
          console.log(res);
        })
    
   
  }

}
