import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlanoTreino, Usuario, GrupoMuscular } from '../../../models/login-credentials.model';
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
  grupoMuscular: GrupoMuscular[];
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
      this.planoTreinoService.obterUltimoPlanoTreino().subscribe((resp) => {
        this.grupoMuscular = resp;

        if (!this.grupoMuscular) {
          this.grupoMuscular = new GrupoMuscular[0];
        }
        this.addIfNotExists(this.grupoMuscular, 'descricao', 'Membros Inferiores (Pernas)');
        this.addIfNotExists(this.grupoMuscular, 'descricao', 'Peitorais');
        this.addIfNotExists(this.grupoMuscular, 'descricao', 'Dorsais');
        this.addIfNotExists(this.grupoMuscular, 'descricao', 'Bíceps');
        this.addIfNotExists(this.grupoMuscular, 'descricao', 'Tríceps');
        this.addIfNotExists(this.grupoMuscular, 'descricao', 'Deltóides');        
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

    for (var i = 0; i < this.grupoMuscular.length; i++) {
      if (this.grupoMuscular[i].descricao === nomeGrupo) {
        for (var l = 0; l < this.grupoMuscular[i].exercicios.length; l++) {
          if (this.grupoMuscular[i].exercicios[l].descricao === nomeExercicio) {
            this.grupoMuscular[i].exercicios.splice(l, 1);
          }
        }
      }
    }
  }



  onNovoExercicioSubmit() {

    if (this.exercicioForm.valid) {
      for (var i = 0; i < this.grupoMuscular.length; i++) {
        if (this.grupoMuscular[i].descricao === this.grupoSelecionado) {

          let exists = this.grupoMuscular[i].exercicios
            .find(exercicio => exercicio === this.exercicioForm.value.exercicio);

          if (!exists) {
            this.grupoMuscular[i].exercicios.push(this.exercicioForm.value);
          }
        }
      }

      this.exercicioForm.reset();
      this.onToggleExercicioModal(this.grupoSelecionado);
    }

  }
}
