import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Usuario } from '../../../models/usuario.model';
import { AlunoService } from '../../../services/aluno.service';
import { isNullOrUndefined } from 'util';

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
    private alunoService: AlunoService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {

      if (params['usuario']) {
        this.alunoService.obterUsuarios(params['usuario']).subscribe((usuario) => {

          if (usuario.length) {
            this.aluno = usuario[0];
            this.alunoForm.setValue({
              id: this.aluno.id || '',
              nome: this.aluno.nome || '',
              email: this.aluno.email || '',
              celular: this.aluno.celular || '',
              peso: this.aluno.peso || '',
              altura: this.aluno.altura || '',
              obs: this.aluno.observacao || '',
              senha: '',
              confirmaSenha: ''
            });
          }

        });
      }
    });
  }

  onSubmit(loginForm) {

    if (loginForm.valid) {
      if ((!isNullOrUndefined(loginForm.value.password) && !isNullOrUndefined(loginForm.value.confirmPassword))
          && (loginForm.value.password !== loginForm.value.confirmPassword) ){
        this.mensagemErro = 'Senha e confirmação de senha diferentes!';
      }

      let usrSenha: Usuario = {
        id: loginForm.value.id,
        nome: loginForm.value.nome,
        email: loginForm.value.email,
        celular: loginForm.value.celular,
        peso: loginForm.value.peso,
        altura: loginForm.value.altura,
        observacao: loginForm.value.obs,
        senha: loginForm.value.senha,
        confirmaSenha: loginForm.value.confirmaSenha
      };

      this.alunoService.salvarAluno(usrSenha).subscribe((resp) => {
        this.mensagemErro = '';
        this.router.navigate(['./usuario']);
      }, (resp) => {
        console.log(resp);
        this.mensagemErro = resp.error;
      });

    }
  }

  onNotificationClick() {
    this.mensagemErro = '';
  }

}
