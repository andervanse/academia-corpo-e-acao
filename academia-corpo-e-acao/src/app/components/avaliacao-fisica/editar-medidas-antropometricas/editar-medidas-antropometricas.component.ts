import { Component, OnInit, ViewChild } from '@angular/core';
import { AvaliacaoFisica } from '../../../models/avaliacao-fisica.model';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AvaliacaoFisicaService } from '../../../services/avaliacao-fisica.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-editar-medidas-antropometricas',
  templateUrl: './editar-medidas-antropometricas.component.html',
  styleUrls: ['./editar-medidas-antropometricas.component.css']
})
export class EditarMedidasAntropometricasComponent implements OnInit {

  avaliacaoFisica: AvaliacaoFisica;
  usuarioId: number;
  avaliacaoId: number;
  mensagemErro: string = '';
  searchWord: string;
  nomeAluno: string;
  @ViewChild('medAntropForm') medAntropForm: FormGroup;

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
        if (error.status == 404) {
          this.avaliacaoFisica = this.avaliacaoService.criarAvaliacao(this.avaliacaoId, this.usuarioId);
          setTimeout(() => {
            this.setFormFields();
          }, 500);
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

    if (isNullOrUndefined(this.avaliacaoFisica.medidasAntropometricas)) {
      this.avaliacaoFisica.medidasAntropometricas = {
        ombro: null,
        torax: null,
        cintura: null,
        quadril: null,
        antebracoDireito: null,
        antebracoEsquerdo: null,
        bracoDireito: null,
        bracoEsquerdo: null,
        coxaDireita: null,
        coxaEsquerda: null,
        pernaDireita: null,
        pernaEsquerda: null
      };
    }

    if (this.medAntropForm) {

      this.medAntropForm.setValue({
        id: this.avaliacaoFisica.id,
        usuarioId: this.avaliacaoFisica.usuarioId,
        ombro: this.avaliacaoFisica.medidasAntropometricas.ombro,
        torax: this.avaliacaoFisica.medidasAntropometricas.torax,
        cintura: this.avaliacaoFisica.medidasAntropometricas.cintura,
        quadril: this.avaliacaoFisica.medidasAntropometricas.quadril,
        antebracoDireito: this.avaliacaoFisica.medidasAntropometricas.antebracoDireito,
        antebracoEsquerdo: this.avaliacaoFisica.medidasAntropometricas.antebracoEsquerdo,
        bracoDireito: this.avaliacaoFisica.medidasAntropometricas.bracoDireito,
        bracoEsquerdo: this.avaliacaoFisica.medidasAntropometricas.bracoEsquerdo,
        coxaDireita: this.avaliacaoFisica.medidasAntropometricas.coxaDireita,
        coxaEsquerda: this.avaliacaoFisica.medidasAntropometricas.coxaEsquerda,
        pernaDireita: this.avaliacaoFisica.medidasAntropometricas.pernaDireita,
        pernaEsquerda: this.avaliacaoFisica.medidasAntropometricas.pernaEsquerda
      });
    }
  }

  onVoltarAvaliacaoFisica() {

    if (this.medAntropForm.valid) {
      try {
        this.avaliacaoService.adicionarMedidasAntropometricas(this.medAntropForm.value);        
      } catch (error) {
        console.log(error);
      }
    }

    this.router.navigate(['avaliacao-fisica', this.usuarioId, 'editar', this.avaliacaoId], { queryParams: { search: this.searchWord, aluno: this.nomeAluno } });        
  }

}
