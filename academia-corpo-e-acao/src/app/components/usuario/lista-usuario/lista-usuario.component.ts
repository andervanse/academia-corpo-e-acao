import { Component, OnInit } from '@angular/core';
import { PlanoTreinoService } from '../../../services/plano-treino.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';


@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  alunos: Usuario[];
  aluno: Usuario;

  constructor (
    private router: Router,
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
    console.log(this.aluno); 
    this.router.navigate(['/usuario', this.aluno.nome]); 
  }

}
