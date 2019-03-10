import { Component, OnInit, ViewChild } from '@angular/core';
import { AvaliacaoFisica } from '../../../models/avaliacao-fisica.model';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AvaliacaoFisicaService } from '../../../services/avaliacao-fisica.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-avaliacao-fisica-editar',
  templateUrl: './avaliacao-fisica-editar.component.html',
  styleUrls: ['./avaliacao-fisica-editar.component.css']
})
export class AvaliacaoFisicaEditarComponent implements OnInit {

  mensagemErro: string = '';
  searchWord: string;
  nomeAluno: string;
  avaliacaoFisica: AvaliacaoFisica;
  usuarioId: number;
  avaliacaoFisicaId: number;
  @ViewChild('avaliacaoForm') avaliacaoForm: FormGroup;

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

      if (params['avaliacao']) {
        this.avaliacaoFisicaId = +params['avaliacao'];

        this.avaliacaoService.obterAvaliacaoFisica(this.usuarioId, this.avaliacaoFisicaId).subscribe((avaliacaoFisica) => {
          this.avaliacaoFisica = avaliacaoFisica;
          setTimeout(() => {
            this.setFormFields();
          }, (500));
        }, (error) => {
          if (error.status == 404) {
            this.avaliacaoFisica = this.avaliacaoService.criarAvaliacao(this.avaliacaoFisicaId, this.usuarioId);
            setTimeout(() => {
              this.setFormFields();
            }, (500));
          }
        });
      }
    });
  }

  private setFormFields() {

    if (isNullOrUndefined(this.avaliacaoFisica)) {
      this.avaliacaoFisica = {
        observacao: null,
        usuarioId: this.usuarioId,
        id: null
      };
    }

    if (isNullOrUndefined(this.avaliacaoFisica.medidas)) {
      this.avaliacaoFisica.medidas = {
        peso: null,
        estatura: null,
      };
    }

    if (!isNullOrUndefined(this.avaliacaoForm)) {
      this.avaliacaoForm.setValue({
        id: this.avaliacaoFisica.id || '',
        usuarioId: this.avaliacaoFisica.usuarioId || '',
        obs: this.avaliacaoFisica.observacao || '',
        estatura: this.avaliacaoFisica.medidas.estatura || '',
        peso: this.avaliacaoFisica.medidas.peso || '',
        pressaoArterialSistolica: this.avaliacaoFisica.medidas.pressaoArterialSistolica || '',
        pressaoArterialDiastolica: this.avaliacaoFisica.medidas.pressaoArterialDiastolica || '',
        fcr: this.avaliacaoFisica.medidas.fcr || '',
        fcMax: this.avaliacaoFisica.medidas.fcMax || '',
        zonaAlvoInicial: this.avaliacaoFisica.medidas.zonaAlvoInicial || '',
        zonaAlvoFinal: this.avaliacaoFisica.medidas.zonaAlvoFinal || ''
      });
    }

  }

  private obterQueryParams(): any {
    return { search: this.searchWord, aluno: this.nomeAluno }
  }

  onComposicaoCorporalClick() {
    this.irParaRota('composicao-corporal');
  }

  onMedicaoAntropometricaClick() {
    this.irParaRota('med-antrop');
  }

  private irParaRota(nmRoute: string) {
    if (this.avaliacaoForm.valid && this.avaliacaoForm.touched) {
      this.avaliacaoFisica.observacao = this.avaliacaoForm.value.obs;
      let imc = this.avaliacaoFisica.medidas.imc;
      let duploProd = this.avaliacaoFisica.medidas.duploProduto;
      this.avaliacaoService.adicionarMedidas(this.avaliacaoForm.value);
      this.avaliacaoFisica.medidas.imc = imc;
      this.avaliacaoFisica.medidas.duploProduto = duploProd;
    }

    this.router.navigate(['/usuario', this.usuarioId, nmRoute, 'editar', this.avaliacaoFisicaId], { queryParams: this.obterQueryParams() });
  }

  onSubmit() {

    if (this.avaliacaoForm.valid) {
      this.avaliacaoFisica.observacao = this.avaliacaoForm.value.obs;
      this.avaliacaoService.adicionarMedidas(this.avaliacaoForm.value);
      this.avaliacaoService.salvarAvaliacaoFisica(this.avaliacaoFisica).subscribe((resp) => {
        this.mensagemErro = '';
        this.router.navigate(['/usuario', this.usuarioId, 'avaliacoes-fisicas'], { queryParams: this.obterQueryParams() });
      }, (resp) => {
        this.mensagemErro = resp.error;
        console.error(resp.message);
      });
    }
  }

  onNotificationClick() {
    this.mensagemErro = '';
  }
}
