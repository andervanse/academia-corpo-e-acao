import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PostagemHomeService } from '../../services/postagem-home.service';
import { PostagemHome } from '../../models/postagem-home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  
})
export class HomeComponent implements OnInit {

  loading: boolean;
  mensagemErro: string;
  postagensHome: PostagemHome[];

  constructor(
    private authService: AuthService,
    private postagemHomeService: PostagemHomeService) { }

  ngOnInit() {
    this.mensagemErro = '';
    this.loading = true;
    let usr = this.authService.obterUsuario();

    this.postagemHomeService.obterPostagensHome().subscribe((postagens) => {
      if (postagens) {
        this.postagensHome = postagens;
      }
      this.loading = false;
    }, (error) => {

      if (error.status === 404) {
        this.postagensHome = [];
      } 

      this.mensagemErro = error.message;      
      console.error(error.message);
      this.loading = false;
    });
  }


  onNotificationClick() {
    this.mensagemErro = '';
  }

}
