import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomePostagensComponent } from "./home-postagens.component";
import { ListaPostagensComponent } from "../lista-postagens/lista-postagens.component";
import { AuthGuardService } from "../../../services/auth-guard.service";
import { EditarPostagemComponent } from "../editar-postagem/editar-postagem.component";

const appRoutes :Routes = [  
    { path: '', component: HomePostagensComponent, 
       children: [
        { path: '', component: ListaPostagensComponent, canActivate: [AuthGuardService] }, 
        { path: 'editar/:postagem', component: EditarPostagemComponent, canActivate: [AuthGuardService] }
       ]  
    }
  ]

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule.forChild(appRoutes) ],
    exports: [ RouterModule ]
})
export class HomePostagensRoutingModule {}