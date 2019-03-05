import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlanoTreinoService } from '../../services/plano-treino.service';
import { AuthService } from '../../services/auth.service';
import { PlanoTreino } from '../../models/plano-treino.models';

@Component({
  selector: 'app-ficha-treino',
  templateUrl: './ficha-treino.component.html',
  styleUrls: ['./ficha-treino.component.css']
})
export class FichaTreinoComponent implements OnInit {

  planosTreino: PlanoTreino[] = [];
  loading: boolean;
  planoTreinoIdSelecionado: number;
  @ViewChild('dialogModal') dialogModal: ElementRef;

  constructor(private planoTreinoService: PlanoTreinoService,
              private authService: AuthService) { }

  ngOnInit() {
    this.loading = true;
    var usuario = this.authService.obterUsuario();
    
    this.planoTreinoService.obterTemplatesPlanoTreino().subscribe((resp) => {
      this.loading = false;
      this.planosTreino = resp;
    }, (error) => {
      this.loading = false;
    });
  }

  onExcluirClick() {
    if (this.planoTreinoIdSelecionado) {
      this.planoTreinoService.excluirPlanoTreino(this.planoTreinoIdSelecionado).subscribe((resp) => {
        let idx = this.planosTreino.findIndex((v) => { return v.id == this.planoTreinoIdSelecionado; });
        this.planosTreino.splice(idx, 1);
        this.dialogModal.nativeElement.classList.toggle('is-active');
      }, (error) => {
        console.log(error);
        this.dialogModal.nativeElement.classList.toggle('is-active');
      });
    }
  }

  onToggleModal(planoTreinoId: number) {
    this.planoTreinoIdSelecionado = planoTreinoId;
    this.dialogModal.nativeElement.classList.toggle('is-active');
  }  

}
