import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlanoTreinoService } from '../../../services/plano-treino.service';
import { PlanoTreino } from '../../../models/plano-treino.models';

@Component({
  selector: 'app-ficha-treino-lista',
  templateUrl: './ficha-treino-lista.component.html',
  styleUrls: ['./ficha-treino-lista.component.css']
})
export class FichaTreinoListaComponent implements OnInit {

  planosTreino: PlanoTreino[] = [];
  loading: boolean = false;
  planoTreinoIdSelecionado: number;
  @ViewChild('dialogModal') dialogModal: ElementRef;

  constructor(private planoTreinoService: PlanoTreinoService) { }

  ngOnInit() {
    this.loading = true;   
    this.planoTreinoService.obterTemplatesPlanoTreino().subscribe((resp) => {
      this.loading = false;
      this.planosTreino = resp;
    }, (error) => {
      this.loading = false;
      console.error(error.message);
    });
  }

  onExcluirClick() {
    if (this.planoTreinoIdSelecionado) {
      this.loading = true;
      this.planoTreinoService.excluirPlanoTreino(this.planoTreinoIdSelecionado).subscribe((resp) => {
        let idx = this.planosTreino.findIndex((v) => { return v.id == this.planoTreinoIdSelecionado; });
        this.planosTreino.splice(idx, 1);
        this.dialogModal.nativeElement.classList.toggle('is-active');
        this.loading = false;
      }, (error) => {
        this.loading = false;
        console.error(error.message);
        this.dialogModal.nativeElement.classList.toggle('is-active');
      });
    }
  }

  onToggleModal(planoTreinoId: number) {
    this.planoTreinoIdSelecionado = planoTreinoId;
    this.dialogModal.nativeElement.classList.toggle('is-active');
  }  

}
