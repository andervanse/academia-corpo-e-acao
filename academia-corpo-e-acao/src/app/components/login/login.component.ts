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
  errorMessage :string;

  constructor(
    private router: Router, 
    private authService: AuthService) { }

  ngOnInit() {
    this.errorMessage = '';
  }

  onSubmit(form) {
    
    if (form.valid) {
      var credentials = new LoginCredentials();
      credentials.login = form.value.login;
      credentials.senha = form.value.password;

      this.authService.autenticar(credentials).subscribe((resp) => {
        this.loginFailed = false;
        this.errorMessage = '';
        this.router.navigate(['ficha-treino']);        
      },
      (error) => {
        if (error.status == 400) {
          this.errorMessage = 'Usuário ou Senha inválidos';
        }else {
          if (error.status == 0) {
            this.errorMessage = 'Serviço indisponível'
          } else {
            this.errorMessage = error.statusText;
          }
        }
        this.loginFailed = true;
      });
    }
  }

  onNotificationClick(form) {    
    this.loginFailed = false;
  }

}
