import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  authStatus !: boolean;



  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.AuthService.isAuth;
  }

  onSignIn() {
    this.AuthService.signIn().then(
      () => {
        this.authStatus = this.AuthService.isAuth;
        this.router.navigate(['/appareils']);
      }
    );
  }

  onSignOut() {
    this.AuthService.signOut();
    console.log('user disconnected');
    this.authStatus = this.AuthService.isAuth;
  }
}
