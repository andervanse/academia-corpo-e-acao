import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvaliacaoFisica } from '../../../models/avaliacao-fisica.model';
import { AvaliacaoFisicaService } from '../../../services/avaliacao-fisica.service';
 
@Component({
  selector: 'app-lista-avaliacao-fisica',
  templateUrl: './lista-avaliacao-fisica.component.html',
  styleUrls: ['./lista-avaliacao-fisica.component.css']
})
export class ListaAvaliacaoFisicaComponent implements OnInit {

  mensagemErro: string = '';
  searchWord: string;
  nomeAluno: string;
  avaliacoesFisicas: AvaliacaoFisica[] = [];
  avaliacaoFisicaIdSelecionada: number;
  usuarioId: number;
  loading: boolean = false;
  @ViewChild('dialogModal') dialogModal: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private avaliacaoService: AvaliacaoFisicaService) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params) => {
      this.searchWord = params['search'];
      this.nomeAluno = params['aluno'];
    });

    this.route.params.subscribe((params) => {
      this.usuarioId = params['usuario'];
      this.loading = true;

      if (params['usuario']) {
        this.avaliacaoService.obterAvaliacoesFisicas(params['usuario']).subscribe((avaliacoesFisicas) => {
          if (avaliacoesFisicas) {
            this.avaliacoesFisicas = avaliacoesFisicas;
          }
          this.loading = false;
        }, (error) => {
          if (error.status === 404) {
            this.avaliacoesFisicas = [];
          } else {
            console.error(error.message);
          }
          
          this.loading = false;
        });
      }
    });
  }

  onToggleModal(avaliacaoFisicaId: number) {
    this.avaliacaoFisicaIdSelecionada = avaliacaoFisicaId;
    this.dialogModal.nativeElement.classList.toggle('is-active');
  }

  onExcluirClick() {
    if (this.avaliacaoFisicaIdSelecionada) {
      this.avaliacaoService.excluirAvaliacaoFisica(this.avaliacaoFisicaIdSelecionada).subscribe((resp) => {
        this.avaliacoesFisicas = resp;
        this.dialogModal.nativeElement.classList.toggle('is-active');
      }, (error) => {
        console.log(error);
        this.dialogModal.nativeElement.classList.toggle('is-active');
      });
    }
  }
}
