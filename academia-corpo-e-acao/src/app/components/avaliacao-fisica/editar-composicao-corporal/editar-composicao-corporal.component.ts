import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AvaliacaoFisicaService } from '../../../services/avaliacao-fisica.service';
import { AvaliacaoFisica } from '../../../models/avaliacao-fisica.model';
import { isNullOrUndefined } from 'util';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-composicao-corporal',
  templateUrl: './editar-composicao-corporal.component.html',
  styleUrls: ['./editar-composicao-corporal.component.css']
})
export class EditarComposicaoCorporalComponent implements OnInit {

  avaliacaoFisica: AvaliacaoFisica;
  usuarioId: number;
  avaliacaoId: number;
  mensagemErro: string = '';
  searchWord: string;
  nomeAluno: string;
  @ViewChild('composicaoCorporalForm') composicaoCorporalForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private avaliacaoService: AvaliacaoFisicaService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchWord = params['search'];
      this.nomeAluno = params['aluno'];
    });

    this.route.params.subscribe((params) => {
      this.usuarioId = +params['usuario'];
      this.avaliacaoId = +params['avaliacao'];
      this.avaliacaoService.obterAvaliacaoFisica(this.usuarioId, this.avaliacaoId).subscribe((avaliacaoFisica) => {
        this.avaliacaoFisica = avaliacaoFisica;
        setTimeout(() => {
          this.setFormFields();
        }, 500);
      }, (error) => {
        console.error(error.message);
        if (error.status == 404) {
          this.setFormFields();
        }
      });

    });
  }

  private setFormFields() {

    if (isNullOrUndefined(this.avaliacaoFisica)) {
      this.avaliacaoFisica = {
        id: this.avaliacaoId,
        usuarioId: this.usuarioId,
        observacao: null
      };
    }

    if (isNullOrUndefined(this.avaliacaoFisica.composicaoCorporal)) {
      this.avaliacaoFisica.composicaoCorporal = {
        subescapular: null,
        auxiliarMedia: null,
        suprailiaca: null,
        triceps: null,
        coxa: null,
        panturilha: null
      };
    }

    if (!isNullOrUndefined(this.composicaoCorporalForm)) {
      this.composicaoCorporalForm.setValue({
        id: this.avaliacaoFisica.id,
        usuarioId: this.avaliacaoFisica.usuarioId,
        subescapular: this.avaliacaoFisica.composicaoCorporal.subescapular,
        auxiliarMedia: this.avaliacaoFisica.composicaoCorporal.auxiliarMedia,
        suprailiaca: this.avaliacaoFisica.composicaoCorporal.suprailiaca,
        triceps: this.avaliacaoFisica.composicaoCorporal.triceps,
        coxa: this.avaliacaoFisica.composicaoCorporal.coxa,
        panturilha: this.avaliacaoFisica.composicaoCorporal.panturilha
      });
    }
  }

  onVoltarAvaliacaoFisica() {
    if (this.composicaoCorporalForm.valid) {
      this.avaliacaoService.adicionarComposicaoCorporal(this.composicaoCorporalForm.value);
    }
    this.router.navigate(['avaliacao-fisica', this.usuarioId, 'editar', this.avaliacaoId], { queryParams: { search: this.searchWord, aluno: this.nomeAluno } });
  }
}
