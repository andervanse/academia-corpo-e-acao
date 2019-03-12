import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoffComponent } from "./components/logoff/logoff.component";
import { InfoAlunoComponent } from "./components/usuario/info/info-aluno.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AvaliacaoFisicaAlunoComponent } from "./components/avaliacao-fisica/aluno/avaliacao-fisica-aluno.component";
import { FichaTreinoComponent } from "./components/ficha-treino/ficha-treino.component";
import { FichaTreinoListaComponent } from "./components/ficha-treino/lista/ficha-treino-lista.component";
import { FichaTreinoAlunoComponent } from "./components/ficha-treino/aluno/ficha-treino-aluno.component";
import { FichaTreinoAlunoEditarComponent } from "./components/ficha-treino/editar/ficha-treino-editar.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { ListaUsuarioComponent } from "./components/usuario/lista/lista-usuario.component";
import { SenhaUsuarioComponent } from "./components/usuario/senha/senha-usuario.component";
import { CadastroUsuarioComponent } from "./components/usuario/cadastro/cadastro-usuario.component";


const appRoutes :Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '' },
    { path: 'contato', component: ContatoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logoff', component: LogoffComponent },  
    { path: 'info-aluno', component: InfoAlunoComponent, canActivate: [AuthGuardService] }, 
    { path: 'avaliacao-fisica-aluno', component: AvaliacaoFisicaAlunoComponent, canActivate: [AuthGuardService] },
    { path: 'ficha-treino/aluno', component: FichaTreinoAlunoComponent, canActivate: [AuthGuardService] },

    { path: 'ficha-treino', component: FichaTreinoComponent, 
      children: [
        { path: '', component: FichaTreinoListaComponent, canActivate: [AuthGuardService] },
        { path: 'editar/template/:treino', component: FichaTreinoAlunoEditarComponent, canActivate: [AuthGuardService] },
        { path: 'editar/:usuario', component: FichaTreinoAlunoEditarComponent, canActivate: [AuthGuardService] }
      ]
    },

    { path: 'usuario', component: UsuarioComponent, 
       children: [
         { path: '', component: ListaUsuarioComponent, canActivate: [AuthGuardService] },       
         { path: 'senha-usuario', component: SenhaUsuarioComponent, canActivate: [AuthGuardService] },
         { path: ':usuario', component: CadastroUsuarioComponent, canActivate: [AuthGuardService] },
       ]  
    },
    { path: '**', redirectTo: '' }
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}