import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostagemHomeService } from '../../../services/postagem-home.service';
import { PostagemHome } from '../../../models/postagem-home.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-lista-postagens',
  templateUrl: './lista-postagens.component.html',
  styleUrls: ['./lista-postagens.component.css']
})
export class ListaPostagensComponent implements OnInit {

  postagemHomeIdSelecionado :number;
  loading :boolean;
  mensagemErro :string;
  postagemHome :PostagemHome;
  postagensHome :PostagemHome[];
  @ViewChild('dialogModal') dialogModal: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private postagemHomeService: PostagemHomeService) { }

  ngOnInit() {
    this.loading = true;
    this.mensagemErro = '';
    let usr = this.authService.obterUsuario();

    this.postagemHomeService.obterPostagensHome().subscribe((postagens) => {
      if (postagens) {
        this.postagensHome = postagens;
      }
      this.loading = false;
    }, (error) => {
      if (error.status === 404) {
        this.postagensHome = [];
      }
      console.error(error.message);
      this.mensagemErro = error.message;      
      this.loading = false;
    });
  }

  onToggleModal(avaliacaoFisicaId: number) {
    this.postagemHomeIdSelecionado = avaliacaoFisicaId;
    this.dialogModal.nativeElement.classList.toggle('is-active');
  }

  onExcluirClick() {
    if (this.postagemHomeIdSelecionado) {
      this.postagemHomeService.excluirPostagemHome(this.postagemHomeIdSelecionado).subscribe((resp) => {
        this.postagensHome = resp;
        this.dialogModal.nativeElement.classList.toggle('is-active');
      }, (error) => {
        this.mensagemErro = error.message;
        console.error(error.message);
        this.dialogModal.nativeElement.classList.toggle('is-active');
      });
    }
  }
  
  onNotificationClick() {
    this.mensagemErro = '';
  }

}
