import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Usuario } from '../../../models/usuario.model';
import { AlunoService } from '../../../services/aluno.service';
import { isNullOrUndefined } from 'util';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  mensagemErro: string = '';
  aluno: Usuario;
  searchWord: string;
  nomeAluno: string;
  imagemUpload: any;
  progress: number;
  sexo = ['Masculino', 'Feminino'];
  @ViewChild('alunoForm') alunoForm: FormGroup;
  @ViewChild('btnSalvar') btnSalvar : ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alunoService: AlunoService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchWord = params['search'];
      this.nomeAluno = params['aluno'];
    });

    this.route.params.subscribe((params) => {

      if (params['usuario']) {
        this.alunoService.obterInfoUsuario(params['usuario']).subscribe((usuario) => {
          if (usuario) {
            this.aluno = usuario;

            let dtNasc = this.aluno.dtNascimento ? new Date(this.aluno.dtNascimento).toISOString().substring(0, 10) : '';

            this.alunoForm.setValue({
              id: this.aluno.id || '',
              nome: this.aluno.nome || '',
              email: this.aluno.email || '',
              celular: this.aluno.celular || '',
              dtNascimento: dtNasc,
              sexo: (this.aluno.sexo === '0' ? '' : this.aluno.sexo),
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
      this.btnSalvar.nativeElement.classList.add('is-loading');

      if ((!isNullOrUndefined(loginForm.value.password) && !isNullOrUndefined(loginForm.value.confirmPassword))
          && (loginForm.value.password !== loginForm.value.confirmPassword) ){
        this.mensagemErro = 'Senha e confirmação de senha diferentes!';
        this.btnSalvar.nativeElement.classList.remove('is-loading');
        return;
      }

      let usrSenha: Usuario = {
        id: loginForm.value.id,
        nome: loginForm.value.nome,
        email: loginForm.value.email,
        celular: loginForm.value.celular,
        dtNascimento: loginForm.value.dtNascimento,
        sexo: loginForm.value.sexo,
        observacao: loginForm.value.obs,
        senha: loginForm.value.senha,
        confirmaSenha: loginForm.value.confirmaSenha
      };

      if (this.imagemUpload) {
        const formData = new FormData();
        formData.append('file', this.imagemUpload, usrSenha.nome);

        this.alunoService.uploadFotoAluno(formData).subscribe((event) => {
          
          if (event.type === HttpEventType.UploadProgress)
             this.progress = Math.round(100 * event.loaded / event.total);
          else if (event.type === HttpEventType.Response) {
            console.log('Upload success.');
             //this.message = 'Upload success.';
             //this.onUploadFinished.emit(event.body);
        }

        });
      }

      console.log(usrSenha);

      this.alunoService.salvarAluno(usrSenha).subscribe((resp) => {
        this.mensagemErro = '';
        this.btnSalvar.nativeElement.classList.remove('is-loading');
        this.router.navigate(['./usuario'], { queryParams: { search: this.searchWord }});
      }, (error) => {
        console.error(error.message);
        this.mensagemErro = error.error;
        this.btnSalvar.nativeElement.classList.remove('is-loading');
      });
    }
  }

  onNotificationClick() {
    this.mensagemErro = '';
  }

  imageUpload(e) {

    if (e.target.files[0]) {
      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
        this.imagemUpload = reader.result;
      }

      reader.readAsDataURL(file);
    }
  }  
}
