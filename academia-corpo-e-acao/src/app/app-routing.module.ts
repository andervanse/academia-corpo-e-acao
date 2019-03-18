import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoffComponent } from "./components/logoff/logoff.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AvaliacaoFisicaAlunoComponent } from "./components/avaliacao-fisica/aluno/avaliacao-fisica-aluno.component";
import { FichaTreinoAlunoComponent } from "./components/ficha-treino/aluno/ficha-treino-aluno.component";

const appRoutes :Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '' },
    { path: 'contato', component: ContatoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logoff', component: LogoffComponent },  
    { path: 'avaliacao-fisica-aluno', component: AvaliacaoFisicaAlunoComponent, canActivate: [AuthGuardService] },
    { path: 'ficha-treino/aluno', component: FichaTreinoAlunoComponent, canActivate: [AuthGuardService] },
    { path: 'avaliacao-fisica', loadChildren:'./components/avaliacao-fisica/avaliacao-fisica.module#AvaliacaoFisicaModule' },
    { path: 'ficha-treino', loadChildren:'./components/ficha-treino/ficha-treino.module#FichaTreinoModule' },
    { path: 'usuario', loadChildren:'./components/usuario/usuario.module#UsuarioModule' },
    { path: 'home-postagens', loadChildren:'./components/home/home-postagens/home-postagens.module#HomePostagensModule' },

    { path: '**', redirectTo: '' }
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}