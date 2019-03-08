import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AvaliacaoFisicaService } from '../../../services/avaliacao-fisica.service';
import { AvaliacaoFisica } from '../../../models/avaliacao-fisica.model';
import { AuthService } from '../../../services/auth.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-avaliacao-fisica-aluno',
  templateUrl: './avaliacao-fisica-aluno.component.html',
  styleUrls: ['./avaliacao-fisica-aluno.component.css']
})
export class AvaliacaoFisicaAlunoComponent implements OnInit {

  nomeAluno: string;
  loading: boolean = false;
  avaliacoesFisicas: AvaliacaoFisica[];
  chart = []; 
  months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

  constructor(
    private authService: AuthService,
    private avaliacaoService: AvaliacaoFisicaService) { }

  ngOnInit() {
    let usuario = this.authService.obterUsuario();
    this.nomeAluno = usuario.nome;
    this.loading = true;

    this.avaliacaoService.obterAvaliacoesFisicas(usuario.id).subscribe((avaliacoesFisicas) => {
      if (avaliacoesFisicas) {
        this.avaliacoesFisicas = avaliacoesFisicas;
        this.initializeChart();
      }
      this.loading = false;
    }, (error) => {
      console.error(error.message);
      this.loading = false;
    });   
  }


  private initializeChart() {

    if (this.avaliacoesFisicas) {

      let sortedList = this.avaliacoesFisicas.sort((a, b) => {
        let valueA = Date.parse(a.dtAtual.toString()), 
            valueB = Date.parse(b.dtAtual.toString());
        return valueA - valueB;
      });

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: sortedList.map(x => { 
              let dtAtual = new Date(x.dtAtual)
              let idxMonth = dtAtual.getMonth();
              return this.months[idxMonth] + '-' + dtAtual.getFullYear().toString().substr(2, 2)
            }),
            datasets: [
              { 
                label: 'Peso',
                data: sortedList.map(x => x.peso),
                borderColor: "#3cba9f",
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

}
