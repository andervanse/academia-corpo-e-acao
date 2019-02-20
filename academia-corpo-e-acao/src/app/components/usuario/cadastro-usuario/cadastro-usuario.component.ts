import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanoTreinoService } from '../../../services/plano-treino.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, UsuarioSenha } from '../../../models/login-credentials.model';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  mensagemErro: string = '';
  aluno: Usuario;
  @ViewChild('alunoForm') alunoForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private planoTreinoService: PlanoTreinoService,
    private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {

      this.planoTreinoService.obterUsuarios(params['usuario']).subscribe((usuario) => {

        if (usuario.length) {
          this.aluno = usuario[0];
          this.alunoForm.setValue({ email: this.aluno.nome, password: '', confirmPassword: '' });
        }

      })
    })

  }

  onSubmit(loginForm) {
    console.log(loginForm);

    if (loginForm.valid) {
      if (loginForm.value.password !== loginForm.value.confirmPassword) {
        this.mensagemErro = 'Senha e confirmação de senha diferentes!';
      }

      let usrSenha: UsuarioSenha = {
        login: loginForm.value.email,
        senha: loginForm.value.password,
        confirmaSenha: loginForm.value.confirmPassword
      };

      this.authService.trocarSenha(usrSenha).subscribe((resp) => {
        console.log(resp);
        this.mensagemErro = '';
        this.router.navigate(['./usuario']);
      }, (resp) => {
        this.mensagemErro = resp.error;
      });

    }
  }

  onNotificationClick() {
    this.mensagemErro = '';
  }

}
