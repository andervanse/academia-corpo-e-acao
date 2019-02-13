import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginCredentials } from '../../models/login-credentials.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFailed :boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    
    if (form.valid) {
      var credentials = new LoginCredentials();
      credentials.login = form.value.email;
      credentials.senha = form.value.password;

      this.authService.autenticar(credentials).subscribe((resp) => {
        this.loginFailed = false;
        this.router.navigate(['ficha-treino']);        
      },
      (error) => {
        console.log(error);
        this.loginFailed = true;
      });
    }
  }

  onNotificationClick(form) {
    form.reset();
    this.loginFailed = false;
  }

}
