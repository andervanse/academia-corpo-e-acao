import { Component, OnInit } from '@angular/core';
import { PlanoTreino } from '../../models/login-credentials.model';
import { PlanoTreinoService } from '../../services/plano-treino.service';

@Component({
  selector: 'app-ficha-treino',
  templateUrl: './ficha-treino.component.html',
  styleUrls: ['./ficha-treino.component.css']
})
export class FichaTreinoComponent implements OnInit {

  treino :PlanoTreino;

  constructor(private planoTreinoService: PlanoTreinoService) { }

  ngOnInit() {
    this.planoTreinoService.obterUltimoPlanoTreino().subscribe((resp) => {
      this.treino = resp[0];
    });
  }

}
