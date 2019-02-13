import { Component, OnInit } from '@angular/core';
import { PlanoTreino, GrupoMuscular } from '../../models/login-credentials.model';
import { PlanoTreinoService } from '../../services/plano-treino.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ficha-treino',
  templateUrl: './ficha-treino.component.html',
  styleUrls: ['./ficha-treino.component.css']
})
export class FichaTreinoComponent implements OnInit {

  gruposMusculares :GrupoMuscular[];

  constructor(private planoTreinoService: PlanoTreinoService,
              private authService: AuthService) { }

  ngOnInit() {
    var usuario = this.authService.obterUsuario();
    
    this.planoTreinoService.obterUltimoPlanoTreino().subscribe((resp) => {
      this.gruposMusculares = resp;
      console.log(resp);
    });
  }

}
