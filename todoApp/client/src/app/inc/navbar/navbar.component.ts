import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.getProfile();
  }
  getProfile() {
    this.authService.getProfile()
        .subscribe(
          res => {
            if(res.success) {
              this.user = res.data;
            }
          }
        )
  }
  logout() {
    localStorage.clear();
    this.user = null;

  }

}
