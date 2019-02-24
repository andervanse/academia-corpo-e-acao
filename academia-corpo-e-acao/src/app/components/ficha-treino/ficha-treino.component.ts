import { Component, OnInit } from '@angular/core';
import { PlanoTreinoService } from '../../services/plano-treino.service';
import { AuthService } from '../../services/auth.service';
import { PlanoTreino } from '../../models/plano-treino.models';

@Component({
  selector: 'app-ficha-treino',
  templateUrl: './ficha-treino.component.html',
  styleUrls: ['./ficha-treino.component.css']
})
export class FichaTreinoComponent implements OnInit {

  planoTreino :PlanoTreino;
  loading :boolean;

  constructor(private planoTreinoService: PlanoTreinoService,
              private authService: AuthService) { }

  ngOnInit() {
    this.loading = true;
    var usuario = this.authService.obterUsuario();
    
    this.planoTreinoService.obterUltimoPlanoTreino(usuario).subscribe((resp) => {
      this.loading = false;
      this.planoTreino = resp;
    }, (error) => {
      this.loading = false;
    });
  }

}
