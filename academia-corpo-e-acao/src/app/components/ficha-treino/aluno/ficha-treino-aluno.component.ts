import { Component, OnInit } from '@angular/core';
import { PlanoTreino } from '../../../models/plano-treino.models';
import { PlanoTreinoService } from '../../../services/plano-treino.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-ficha-treino',
  templateUrl: './ficha-treino-aluno.component.html',
  styleUrls: ['./ficha-treino-aluno.component.css']
})
export class FichaTreinoAlunoComponent implements OnInit {

  planoTreino :PlanoTreino;
  loading :boolean;

  constructor(private planoTreinoService: PlanoTreinoService,
              private authService: AuthService) { }

  ngOnInit() {
    this.loading = true;
    var usuario = this.authService.obterUsuario();
    
    this.planoTreinoService.obterUltimoPlanoTreino(usuario.id).subscribe((resp) => {
      this.loading = false;
      this.planoTreino = resp;
    }, (error) => {
      this.loading = false;
    });
  }

}
