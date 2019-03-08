import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-info-aluno',
  templateUrl: './info-aluno.component.html',
  styleUrls: ['./info-aluno.component.css']
})
export class InfoAlunoComponent implements OnInit {

  constructor(private authService: AuthService) { }

  aluno: Usuario;

  ngOnInit() {
    this.aluno = this.authService.obterUsuario();   
  }

}
