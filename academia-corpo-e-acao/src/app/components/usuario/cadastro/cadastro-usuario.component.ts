import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  searchWord: string;
  nomeAluno: string;
  urlFoto: string;
  imagemUpload: any;
  uploadedFile: File;
  progress: number;
  loading: boolean;
  sexo = ['Masculino', 'Feminino'];
  @ViewChild('alunoForm') alunoForm: FormGroup;
  @ViewChild('btnSalvar') btnSalvar: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alunoService: AlunoService) { }

  ngOnInit() {
    this.loading = true;
    
    this.route.queryParams.subscribe((params) => {
      this.searchWord = params['search'];
      this.nomeAluno = params['aluno'];
    });

    this.route.params.subscribe((params) => {

      if (params['usuario']) {
        this.alunoService.obterInfoUsuario(params['usuario']).subscribe((usuario) => {
          if (usuario) {
            this.aluno = usuario;
            this.urlFoto = this.aluno.urlFoto;

            if (isNullOrUndefined(this.aluno.urlFoto)) {
              this.urlFoto = '../../assets/img/profile-icon_126x126.png';
            }

            let dtNasc = this.aluno.dtNascimento ? new Date(this.aluno.dtNascimento).toISOString().substring(0, 10) : '';

            if (this.alunoForm) {
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
          }
          this.loading = false;
        }, (error) => {
          this.loading = false;
          console.error(error.message);
        });
      }
    });
  }

  onSubmit(usuarioForm) {

    if (usuarioForm.valid) {
      this.btnSalvar.nativeElement.classList.add('is-loading');

      if ((!isNullOrUndefined(usuarioForm.value.password) && !isNullOrUndefined(usuarioForm.value.confirmPassword))
        && (usuarioForm.value.password !== usuarioForm.value.confirmPassword)) {
        this.mensagemErro = 'Senha e confirmação de senha diferentes!';
        this.btnSalvar.nativeElement.classList.remove('is-loading');
        return;
      }

      let usrSenha: Usuario = {
        id: usuarioForm.value.id,
        nome: usuarioForm.value.nome,
        email: usuarioForm.value.email,
        celular: usuarioForm.value.celular,
        dtNascimento: usuarioForm.value.dtNascimento,
        sexo: usuarioForm.value.sexo,
        observacao: usuarioForm.value.obs,
        senha: usuarioForm.value.senha,
        confirmaSenha: usuarioForm.value.confirmaSenha
      };

      if (this.imagemUpload) {
        const formData = new FormData();
        formData.append('image', this.uploadedFile);

        this.alunoService.uploadFotoAluno(formData).subscribe((resp) => {
          usrSenha.urlFoto = resp.urlLocation;
          this.salvarAluno(usrSenha);
        }, (error) => {
          console.error(error.message);
          this.mensagemErro = error.message;
        });
      } else {
        this.salvarAluno(usrSenha);
      }
    }
  }

  private salvarAluno(usr: Usuario) {
    this.alunoService.salvarAluno(usr).subscribe((resp) => {
      this.mensagemErro = '';
      this.btnSalvar.nativeElement.classList.remove('is-loading');
      this.router.navigate(['./usuario'], { queryParams: { search: this.searchWord } });
    }, (error) => {
      console.error(error.message);
      this.mensagemErro = error.message;
      this.btnSalvar.nativeElement.classList.remove('is-loading');
    });
  }

  onNotificationClick() {
    this.mensagemErro = '';
  }

  imageUpload(e) {

    if (e.target.files[0]) {
      let reader = new FileReader();
      this.uploadedFile = e.target.files[0];

      reader.onloadend = () => {
        this.imagemUpload = reader.result;
      }

      reader.readAsDataURL(this.uploadedFile);
    }
  }
}
