import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { isNullOrUndefined } from 'util';

import { PostagemHomeService } from '../../../services/postagem-home.service';
import { PostagemHome } from '../../../models/postagem-home.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-editar-postagem',
  templateUrl: './editar-postagem.component.html',
  styleUrls: ['./editar-postagem.component.css']
})
export class EditarPostagemComponent implements OnInit {
  usuarioId: number;
  postagemHomeId: number;
  postagemHome: PostagemHome;
  mensagemErro: string;
  loading: boolean;
  uploadedFile: any;
  imagemUpload: any;
  private oldUrlImagem: string;
  @ViewChild('postagemForm') postagemForm: FormGroup;
  @ViewChild('btnSalvar') btnSalvar: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private postagemHomeService: PostagemHomeService) { }

  ngOnInit() {
    this.mensagemErro = '';

    this.route.params.subscribe((params) => {
      let usr = this.authService.obterUsuario();
      this.usuarioId = usr.id;

      if (params['postagem']) {
        this.postagemHomeId = +params['postagem'];
        this.loading = true;
        this.postagemHomeService.obterPostagemHome(this.postagemHomeId).subscribe((postagemHome) => {
          this.postagemHome = postagemHome;
          this.oldUrlImagem = postagemHome.urlImagem;

          setTimeout(() => {
            this.setFormFields();
            this.loading = false;
          }, (500));
        }, (error) => {
          this.loading = false;
          if (error.status == 404) {
            this.postagemHome = this.postagemHomeService.novaPostagem(this.usuarioId);
            setTimeout(() => {
              this.setFormFields();
            }, (500));
          }
        });
      }
    });
  }

  private setFormFields() {

    if (isNullOrUndefined(this.postagemHome)) {
      this.postagemHome = this.postagemHomeService.novaPostagem(this.usuarioId);
    }

    if (this.postagemHome) {
      this.imagemUpload = this.postagemHome.urlImagem;
    }

    if (!isNullOrUndefined(this.postagemForm)) {
      this.postagemForm.setValue({
        id: this.postagemHome.id || '',
        usuarioId: this.postagemHome.usuarioId || '',
        ordem: this.postagemHome.ordem || '',
        titulo: this.postagemHome.titulo || '',
        texto: this.postagemHome.texto || ''
      });
    }
  }

  onSubmit() {
    if (this.postagemForm.valid) {

      this.btnSalvar.nativeElement.classList.add('is-loading');
      this.postagemHome.id = this.postagemForm.value.id;
      this.postagemHome.usuarioId = this.usuarioId;
      this.postagemHome.ordem = this.postagemForm.value.ordem;
      this.postagemHome.titulo = this.postagemForm.value.titulo;
      this.postagemHome.texto = this.postagemForm.value.texto;
      this.loading = true;

      if (this.uploadedFile) {
        const formData = new FormData();
        formData.append('image', this.uploadedFile);
        this.postagemHomeService.uploadImagem(formData).subscribe((resp) => {
          this.postagemHome.urlImagem = resp.urlLocation;

          if (this.oldUrlImagem != this.postagemHome.urlImagem) {
            if (this.oldUrlImagem) {
              let urlArray = this.oldUrlImagem.split('/');
              if (urlArray.length > 1) {
                console.log('deleting old file:', this.oldUrlImagem);
                this.postagemHomeService.deleteImagem(urlArray[urlArray.length - 1]).subscribe(resp => {
                  this.oldUrlImagem = this.postagemHome.urlImagem;
                });
              }
            }
          }

          this.salvarPostagem(this.postagemHome);
          this.btnSalvar.nativeElement.classList.remove('is-loading');
          this.loading = false;
        }, (error) => {
          this.loading = false;
          console.error(error.message);
          this.mensagemErro = error.message;
          this.btnSalvar.nativeElement.classList.remove('is-loading');
        });
      } else {

        if (isNullOrUndefined(this.postagemHome.urlImagem)) {
          if (this.oldUrlImagem) {
            let urlArray = this.oldUrlImagem.split('/');
            if (urlArray.length > 1) {
              this.postagemHomeService.deleteImagem(urlArray[urlArray.length - 1]).subscribe(resp => {
                console.log(resp);
              });
            }
          }
        }

        this.salvarPostagem(this.postagemHome);
        this.btnSalvar.nativeElement.classList.remove('is-loading');
      }
    }
  }

  private salvarPostagem(postagem: PostagemHome) {
    this.postagemHomeService.salvarPostagemHome(postagem).subscribe((resp) => {
      this.mensagemErro = '';
      this.router.navigate(['../home-postagens']);
      this.loading = false;
    }, (resp) => {
      this.loading = false;
      this.mensagemErro = resp.error;
      console.error(resp.message);
    });
  }

  onNotificationClick() {
    this.mensagemErro = '';
  }

  apagarImagem() {
    this.imagemUpload = null;
    this.postagemHome.urlImagem = null;
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
