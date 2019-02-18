import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanoTreinoService } from '../../../services/plano-treino.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../../models/login-credentials.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  aluno:Usuario;
  @ViewChild('alunoForm') alunoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private planoTreinoService: PlanoTreinoService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params['usuario']);

      this.planoTreinoService.obterUsuarios(params['usuario']).subscribe((usuario) => {

        if (usuario.length) {
          this.aluno = usuario[0];
          this.alunoForm.setValue({ email: this.aluno.nome, password: '' });
        }

      })
    })

  }

}
