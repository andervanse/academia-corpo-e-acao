import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../../../services/aluno.service';
import { Usuario } from '../../../models/usuario.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {

  constructor(
    private alunoService: AlunoService,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  aluno: Usuario;

  ngOnInit() {

    this.aluno = this.authService.obterUsuario();   
    console.log(this.aluno);
  }

}
