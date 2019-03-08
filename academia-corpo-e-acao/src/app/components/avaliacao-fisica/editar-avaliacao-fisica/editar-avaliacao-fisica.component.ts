import { Component, OnInit, ViewChild } from '@angular/core';
import { AvaliacaoFisica } from '../../../models/avaliacao-fisica.model';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AvaliacaoFisicaService } from '../../../services/avaliacao-fisica.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-editar-avaliacao-fisica',
  templateUrl: './editar-avaliacao-fisica.component.html',
  styleUrls: ['./editar-avaliacao-fisica.component.css']
})
export class EditarAvaliacaoFisicaComponent implements OnInit {

  mensagemErro: string = '';
  searchWord: string;
  nomeAluno: string;
  avaliacaoFisica: AvaliacaoFisica;
  usuarioId: number;
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

      if (params['avaliacao'] > 0) {
        this.avaliacaoService.obterAvaliacaoFisica(this.usuarioId, params['avaliacao']).subscribe((avaliacaoFisica) => {
          this.avaliacaoFisica = avaliacaoFisica;
          this.setFormFields();
        }, (error) => {
          console.error(error.message);
          if (error.status == 404) {
            this.setFormFields();
          }
        });
      }
    });
  }

  private setFormFields() {

    if (isNullOrUndefined(this.avaliacaoFisica)) {
      this.avaliacaoFisica = {
        observacao: null,
        altura: null,
        peso: null,
        usuarioId: this.usuarioId,
        id: null
      };
    }

    if (isNullOrUndefined(this.avaliacaoFisica.medidas)) {
      this.avaliacaoFisica.medidas = {
        ombro: null,
        braco: null,
        cintura: null,
        coxa: null,
        peitoral: null,
        quadril: null
      };
    }

    this.avaliacaoForm.setValue({
      id: this.avaliacaoFisica.id || '',
      usuarioId: this.avaliacaoFisica.usuarioId || '',
      peso: this.avaliacaoFisica.peso || '',
      altura: this.avaliacaoFisica.altura || '',
      ombro: this.avaliacaoFisica.medidas.ombro || '',
      peitoral: this.avaliacaoFisica.medidas.peitoral || '',
      braco: this.avaliacaoFisica.medidas.braco || '',
      cintura: this.avaliacaoFisica.medidas.cintura || '',
      quadril: this.avaliacaoFisica.medidas.quadril || '',
      coxa: this.avaliacaoFisica.medidas.coxa || '',
      obs: this.avaliacaoFisica.observacao || ''
    });
  }

  onSubmit(loginForm) {

    if (loginForm.valid) {

      let avlFisica: AvaliacaoFisica = {
        id: loginForm.value.id,
        usuarioId: this.usuarioId,
        peso: loginForm.value.peso,
        altura: loginForm.value.altura,
        medidas: {
          ombro: loginForm.value.ombro,
          peitoral: loginForm.value.peitoral,
          braco: loginForm.value.braco,
          cintura: loginForm.value.cintura,
          quadril: loginForm.value.quadril,
          coxa: loginForm.value.coxa
        },
        observacao: loginForm.value.obs
      };

      this.avaliacaoService.salvarAvaliacaoFisica(avlFisica).subscribe((resp) => {
        this.mensagemErro = '';
        this.router.navigate(['/usuario', avlFisica.usuarioId, 'avaliacoes-fisicas'], { queryParams: { search: this.searchWord, aluno: this.nomeAluno } });
      }, (resp) => {
        this.mensagemErro = resp.error;
      });
    }
  }

  onNotificationClick() {
    this.mensagemErro = '';
  }
}
