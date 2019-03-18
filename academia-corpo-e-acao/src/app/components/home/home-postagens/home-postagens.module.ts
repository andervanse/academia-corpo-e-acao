import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { ListaPostagensComponent } from "../lista-postagens/lista-postagens.component";
import { EditarPostagemComponent } from "../editar-postagem/editar-postagem.component";
import { PostagemHomeService } from "../../../services/postagem-home.service";
import { HomePostagensRoutingModule } from "./home-postagens.routing.module";
import { HomePostagensComponent } from "./home-postagens.component";


@NgModule({
    declarations: [
        EditarPostagemComponent,
        ListaPostagensComponent,
        HomePostagensComponent 
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomePostagensRoutingModule
    ],
    providers: [ PostagemHomeService ]
})
export class HomePostagensModule {}