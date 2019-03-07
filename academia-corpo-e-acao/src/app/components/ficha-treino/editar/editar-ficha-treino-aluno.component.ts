import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlanoTreinoService } from '../../../services/plano-treino.service';
import { NgForm } from '@angular/forms';
import { PlanoTreino } from '../../../models/plano-treino.models';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../../models/usuario.model';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-editar-ficha-treino-aluno',
  templateUrl: './editar-ficha-treino-aluno.component.html',
  styleUrls: ['./editar-ficha-treino-aluno.component.css']
})
export class EditarFichaTreinoAlunoComponent implements OnInit {

  planoTreino: PlanoTreino;
  planoTreinoAnterior: PlanoTreino;
  templatesPlanoTreino: PlanoTreino[];
  grupoSelecionado: string;
  searchWord: string;
  nomeAluno: string;
  usuarioAdmin: Usuario;
  isTemplate: boolean = false;
  loading: boolean = false;

  @ViewChild('novoExercicioModal') editarExercicio: ElementRef;
  @ViewChild('exercicioForm') exercicioForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private planoTreinoService: PlanoTreinoService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchWord = params['search'];
      this.nomeAluno = params['aluno'] || 'Template';
    });

    this.route.params.subscribe((params) => {
      this.loading = true;

      if (params['usuario']) {
        let usuarioId = +params['usuario'];

        this.planoTreinoService.obterUltimoPlanoTreino(usuarioId).subscribe((resp) => {
          this.planoTreino = resp;
          this.createPlanoTreinoIfNotExists(usuarioId);
          this.loading = false;
        }, (error) => {
          console.error(error.message);
          this.loading = false;

          if (error.status === 404) {
              this.createPlanoTreinoIfNotExists(usuarioId);
          }
        });
      } else {

        if (params['treino']) {
          this.isTemplate = true;
        }

        if ((this.authService.isAdmin()) && (params['treino']  == '0')) {

          this.usuarioAdmin = this.authService.obterUsuario();
          this.createPlanoTreinoIfNotExists(this.usuarioAdmin.id);
          this.loading = false;
          
        } else {

          this.planoTreinoService.obterTemplatePlanoTreino(params['treino']).subscribe((planosTreino) => {
            this.planoTreino = planosTreino;
            this.loading = false;
          }, (error) => {
            console.error(error.message);
            this.loading = false;
          });
        }

      }

      this.planoTreinoService.obterTemplatesPlanoTreino().subscribe((planosTreino) => {
        this.templatesPlanoTreino = planosTreino;
      });

    });
  }

  private createPlanoTreinoIfNotExists(usuarioId: number) {
    if (!this.planoTreino) {
      this.planoTreino = new PlanoTreino();
      this.planoTreino.usuarioId = usuarioId;
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
  }

  addIfNotExists(array: any[], field: string, descr: string) {
    let exists = array
      .find(grp => grp[field] === descr);

    if (!exists) {
      array.push({ descricao: descr, exercicios: [] });
    }
  }

  onCopyTemplate(planoTreinoTemplate: PlanoTreino) {
    this.planoTreinoAnterior = JSON.parse(JSON.stringify(this.planoTreino));
    this.planoTreino.gruposMusculares = [];

    if (this.isTemplate) {

       this.planoTreino.descricao = planoTreinoTemplate.descricao + ' (cópia)';
       this.planoTreino.observacao = planoTreinoTemplate.observacao;

    } else {

      if (isNullOrUndefined(this.planoTreino.descricao) || this.planoTreino.descricao == '')
        this.planoTreino.descricao = planoTreinoTemplate.descricao + ' (cópia)';

      if (isNullOrUndefined(this.planoTreino.observacao) || this.planoTreino.observacao == '')
        this.planoTreino.observacao = planoTreinoTemplate.observacao;
    }

    for (let index = 0; index < planoTreinoTemplate.gruposMusculares.length; index++) {
      this.planoTreino.gruposMusculares.push(planoTreinoTemplate.gruposMusculares[index]);
    }
  }

  onUndoCopyTemplate() {
    if (!isNullOrUndefined(this.planoTreinoAnterior))
      this.planoTreino = this.planoTreinoAnterior;
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

  onAdicionarExercicio() {
    if (this.exercicioForm.valid) {
      let grupoMuscular = this.planoTreino.gruposMusculares
        .find(grp => grp.descricao === this.grupoSelecionado);

      if (grupoMuscular) {
        let exercicio = grupoMuscular.exercicios
          .find(exercicio => exercicio === this.exercicioForm.value.exercicio);

        if (!exercicio) {
          grupoMuscular.exercicios.push(this.exercicioForm.value);
        }
      }

      this.exercicioForm.reset();
      this.onToggleExercicioModal(this.grupoSelecionado);
    }
  }

  onGoBack(evt) {   
    this.navigateToOrigin();
  }

  onSubmit() {
    this.loading = true;

    this.planoTreinoService.salvarPlanoTreino(this.planoTreino).subscribe((resp) => {
      this.planoTreino = resp;
      this.loading = false;
      this.navigateToOrigin();    
    }, (error) => {
      console.log(error);
      this.loading = false;
    });
  }

  private navigateToOrigin() {

    if (this.isTemplate) {
      this.router.navigate(['ficha-treino']);
    } else {
      this.router.navigate(['usuario'], { queryParams: { search: this.searchWord, aluno: this.nomeAluno } });
    }

  }
}
