import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../../../services/aluno.service';
import { Usuario } from '../../../models/usuario.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-senha-usuario',
  templateUrl: './senha-usuario.component.html',
  styleUrls: ['./senha-usuario.component.css']
})
export class SenhaUsuarioComponent implements OnInit {

  mensagemErro: string;
  aluno: Usuario;
  @ViewChild('alunoForm') alunoForm: FormGroup;
  @ViewChild('btnSalvar') btnSalvar: ElementRef;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alunoService: AlunoService) { }

  ngOnInit() {
    this.mensagemErro = '';

    this.route.params.subscribe((params) => {
      if ((params['usuario']) && (params['usuario'] != '0')) {
        this.alunoService.obterUsuarios(params['usuario'])
           .subscribe((resp) => {
                this.aluno = resp[0];
                this.alunoForm.setValue({
                  id: this.aluno.id,
                  login: this.aluno.login
                });                
           });
      }
    });
  }

  onNotificationClick() {
    this.mensagemErro = '';
  }

  onSubmit(loginForm) {

    if (loginForm.valid) {
      if (loginForm.value.senha !== loginForm.value.confirmaSenha) {
        this.mensagemErro = 'Senha e confirmação de senha diferentes!';
        return;
      }

      let aluno: Usuario = {
        id: loginForm.value.id,        
        nome : loginForm.value.login,
        login: loginForm.value.login,
        senha: loginForm.value.senha,
        confirmaSenha: loginForm.value.confirmaSenha
      };
      this.btnSalvar.nativeElement.classList.add('is-loading');

      this.alunoService.salvarAluno(aluno).subscribe((resp) => {
        this.mensagemErro = '';
        this.btnSalvar.nativeElement.classList.remove('is-loading');
        this.router.navigate(['./usuario']); 
      }, (error) => {
        console.error(error.message);
        this.btnSalvar.nativeElement.classList.remove('is-loading');

        for(let prop in error.error) {
          this.mensagemErro += error.error[prop] + '\n';
        }
      });
    }
  }

}
