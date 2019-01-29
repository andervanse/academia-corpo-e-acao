import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlanoTreino, Usuario } from '../../../models/login-credentials.model';
import { PlanoTreinoService } from '../../../services/plano-treino.service';
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-ficha-treino',
  templateUrl: './editar-ficha-treino.component.html',
  styleUrls: ['./editar-ficha-treino.component.css']
})
export class EditarFichaTreinoComponent implements OnInit {

  alunos: Usuario[];
  treino: PlanoTreino;
  aluno: Usuario;
  grupoSelecionado: string;

  @ViewChild('novoExercicioModal') editarExercicio: ElementRef;
  @ViewChild('exercicioForm') exercicioForm: NgForm;

  constructor(
    private planoTreinoService: PlanoTreinoService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onFind(nomeAluno: string) {

    if (nomeAluno.length > 2) {
      this.planoTreinoService.obterUsuarios(nomeAluno).subscribe((resp) => {
        if (resp && resp.length > 0) {
           this.alunos = resp;
        } else {
          this.alunos = null;
        }

      });
    }
  }

  onUserSelected(aluno: Usuario) {
    this.aluno = aluno;
    if (this.aluno) {
      this.planoTreinoService.obterUltimoPlanoTreino('treino-' + aluno.nome).subscribe((resp) => {
        this.treino = resp[0];

        if (!this.treino) {
          this.treino = { id: "treino-" + aluno.nome, dataInicio: new Date(), gruposMusculares: [] };
        }
        this.addIfNotExists(this.treino.gruposMusculares, 'descricao', 'Membros Inferiores (Pernas)');
        this.addIfNotExists(this.treino.gruposMusculares, 'descricao', 'Peitorais');
        this.addIfNotExists(this.treino.gruposMusculares, 'descricao', 'Dorsais');
        this.addIfNotExists(this.treino.gruposMusculares, 'descricao', 'Bíceps');
        this.addIfNotExists(this.treino.gruposMusculares, 'descricao', 'Tríceps');
        this.addIfNotExists(this.treino.gruposMusculares, 'descricao', 'Deltóides');        
      });
    }
  }

  addIfNotExists(array: any[], field:string, descr: string) {
    let exists = array
      .find(grp => grp[field] === descr);

    if (!exists) {
      array.push({ descricao: descr, items: [] });
    }
  }

  onToggleExercicioModal(nomeGrupo: string) {
    this.grupoSelecionado = nomeGrupo;
    this.editarExercicio.nativeElement.classList.toggle('is-active');
  }

  onExcluirExercicio(nomeGrupo: string, nomeExercicio: string) {

    for (var i = 0; i < this.treino.gruposMusculares.length; i++) {
      if (this.treino.gruposMusculares[i].descricao === nomeGrupo) {
        for (var l = 0; l < this.treino.gruposMusculares[i].items.length; l++) {
          if (this.treino.gruposMusculares[i].items[l].exercicio === nomeExercicio) {
            this.treino.gruposMusculares[i].items.splice(l, 1);
          }
        }
      }
    }
  }



  onNovoExercicioSubmit() {

    if (this.exercicioForm.valid) {
      for (var i = 0; i < this.treino.gruposMusculares.length; i++) {
        if (this.treino.gruposMusculares[i].descricao === this.grupoSelecionado) {

          let exists = this.treino.gruposMusculares[i].items
            .find(exercicio => exercicio === this.exercicioForm.value.exercicio);

          if (!exists) {
            this.treino.gruposMusculares[i].items.push(this.exercicioForm.value);
          }
        }
      }

      this.exercicioForm.reset();
      this.onToggleExercicioModal(this.grupoSelecionado);
    }

  }
}
