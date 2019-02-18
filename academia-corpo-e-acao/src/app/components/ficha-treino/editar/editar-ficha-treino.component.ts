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
  planoTreino: PlanoTreino;
  aluno: Usuario;
  grupoSelecionado: string;

  @ViewChild('novoExercicioModal') editarExercicio: ElementRef;
  @ViewChild('exercicioForm') exercicioForm: NgForm;

  constructor(
    private planoTreinoService: PlanoTreinoService) { }

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
      this.planoTreinoService.obterUltimoPlanoTreino(this.aluno).subscribe((resp) => {
        this.planoTreino = resp;
        console.log(resp);

        if (!this.planoTreino) {
          this.planoTreino = new PlanoTreino();
          this.planoTreino.usuarioId = this.aluno.id;
        }

        if (!this.planoTreino.gruposMusculares) {
          this.planoTreino.gruposMusculares = [];
        }
        this.addIfNotExists(this.planoTreino.gruposMusculares, 'descricao', 'Membros Inferiores (Pernas)');
        this.addIfNotExists(this.planoTreino.gruposMusculares, 'descricao', 'Peitorais');
        this.addIfNotExists(this.planoTreino.gruposMusculares, 'descricao', 'Dorsais');
        this.addIfNotExists(this.planoTreino.gruposMusculares, 'descricao', 'Bíceps');
        this.addIfNotExists(this.planoTreino.gruposMusculares, 'descricao', 'Tríceps');
        this.addIfNotExists(this.planoTreino.gruposMusculares, 'descricao', 'Deltóides');        
      });
    }
  }

  addIfNotExists(array: any[], field:string, descr: string) {
    let exists = array
      .find(grp => grp[field] === descr);

    if (!exists) {
      array.push({ descricao: descr, exercicios: [] });
    }
  }

  onToggleExercicioModal(nomeGrupo: string) {
    this.grupoSelecionado = nomeGrupo;
    this.editarExercicio.nativeElement.classList.toggle('is-active');
  }

  onExcluirExercicio(nomeGrupo: string, nomeExercicio: string) {

    for (var i = 0; i < this.planoTreino.gruposMusculares.length; i++) {
      if (this.planoTreino.gruposMusculares[i].descricao === nomeGrupo) {
        for (var l = 0; l < this.planoTreino.gruposMusculares[i].exercicios.length; l++) {
          if (this.planoTreino.gruposMusculares[i].exercicios[l].descricao === nomeExercicio) {
            this.planoTreino.gruposMusculares[i].exercicios.splice(l, 1);
          }
        }
      }
    }
  }

  onNovoExercicioSubmit() {

    if (this.exercicioForm.valid) {
      for (var i = 0; i < this.planoTreino.gruposMusculares.length; i++) {
        if (this.planoTreino.gruposMusculares[i].descricao === this.grupoSelecionado) {

          let exists = this.planoTreino.gruposMusculares[i].exercicios
            .find(exercicio => exercicio === this.exercicioForm.value.exercicio);

          if (!exists) {
            this.planoTreino.gruposMusculares[i].exercicios.push(this.exercicioForm.value);
          }
        }
      }

      this.planoTreinoService.salvarPlanoTreino(this.planoTreino).subscribe((resp) => {
        console.log(resp);
      }, (error) => {
        console.log(error);
      });

      this.exercicioForm.reset();
      this.onToggleExercicioModal(this.grupoSelecionado);
    }

  }
}
