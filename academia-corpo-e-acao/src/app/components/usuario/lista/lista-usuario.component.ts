import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { AlunoService } from '../../../services/aluno.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  alunos: Usuario[];
  firstSearch: boolean;
  searchWord: string;
  @ViewChild('btnFind') bntFind : ElementRef;

  constructor (
    private route: ActivatedRoute,
    private alunoService: AlunoService) { }

  ngOnInit() {
    this.firstSearch = true;
    this.alunos = [];

    this.route.queryParams.subscribe((params) => {
      this.searchWord = params['search'];
      this.onFind(this.searchWord);
    });
  }

  onFind(nomeAluno: string) {
    this.firstSearch = true;
    this.searchWord = nomeAluno;
     
    if (nomeAluno && nomeAluno.length > 2) {
      this.bntFind.nativeElement.classList.add('is-loading');

      this.alunoService.obterUsuarios(nomeAluno).subscribe((resp) => {
        this.alunos = resp;        
        this.firstSearch = false;
        this.bntFind.nativeElement.classList.remove('is-loading');
      }, (error) => {
        this.firstSearch = false;
        this.bntFind.nativeElement.classList.remove('is-loading');
      });
    }
  }

}
