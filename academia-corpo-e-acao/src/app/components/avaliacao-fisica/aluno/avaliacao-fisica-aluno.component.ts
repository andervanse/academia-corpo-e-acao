import { Component, OnInit } from '@angular/core';
import { AvaliacaoFisicaService } from '../../../services/avaliacao-fisica.service';
import { AvaliacaoFisica } from '../../../models/avaliacao-fisica.model';
import { AuthService } from '../../../services/auth.service';
import { Chart } from 'chart.js';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-avaliacao-fisica-aluno',
  templateUrl: './avaliacao-fisica-aluno.component.html',
  styleUrls: ['./avaliacao-fisica-aluno.component.css']
})
export class AvaliacaoFisicaAlunoComponent implements OnInit {
  loading: boolean = false;
  mensagemErro: string;
  nomeAluno: string;
  avaliacoesFisicas: AvaliacaoFisica[];
  chart = []; 
  months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

  constructor(
    private loadingService: LoadingService,
    private authService: AuthService,
    private avaliacaoService: AvaliacaoFisicaService) { }

  ngOnInit() {
    this.mensagemErro = '';
    let usuario = this.authService.obterUsuario();
    this.nomeAluno = usuario.nome;

    this.avaliacaoService.obterAvaliacoesFisicas(usuario.id).subscribe((avaliacoesFisicas) => {
      if (avaliacoesFisicas) {
        this.avaliacoesFisicas = avaliacoesFisicas;
        this.initializeChart();
      }
    }, (error) => {
      this.mensagemErro = error.message;
      console.error(error.message);
    });   
  }
  
  ngAfterContentInit(): void {
    this.loadingService.loading.subscribe((l) => { 
      this.loading = l;  
    });      
  }

  private initializeChart() {

    if (this.avaliacoesFisicas) {

      let sortedList = this.avaliacoesFisicas.sort((a, b) => {
        let valueA = Date.parse(a.dtAtualizacao.toString()), 
            valueB = Date.parse(b.dtAtualizacao.toString());
        return valueA - valueB;
      });

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: sortedList.map(x => { 
              let dtAtual = new Date(x.dtAtualizacao)
              let idxMonth = dtAtual.getMonth();
              return this.months[idxMonth] + '-' + dtAtual.getFullYear().toString().substr(2, 2)
            }),
            datasets: [
              { 
                label: 'Peso',
                data: sortedList.map(x => x.medidas.peso),
                borderColor: "#3cba9f",
                fill: false
              },
              { 
                label: 'IMC',
                data: sortedList.map(x => x.medidas.imc),
                borderColor: "#bab53c",
                fill: false
              }              
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        }); 
    }
  }

  onNotificationClick() {
    this.mensagemErro = '';
  }

}
