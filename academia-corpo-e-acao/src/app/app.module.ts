import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContatoComponent } from './components/contato/contato.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FichaTreinoComponent } from './components/ficha-treino/ficha-treino.component';
import { LogoffComponent } from './components/logoff/logoff.component';
import { PlanoTreinoService } from './services/plano-treino.service';
import { EditarFichaTreinoComponent } from './components/ficha-treino/editar/editar-ficha-treino.component';
import { MinimizeTextPipe } from './pipes/minimize-text.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ListaUsuarioComponent } from './components/usuario/lista-usuario/lista-usuario.component';
import { CadastroUsuarioComponent } from './components/usuario/cadastro-usuario/cadastro-usuario.component';
import { TrocaSenhaComponent } from './components/usuario/troca-senha/troca-senha.component';

const appRoutes :Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'contato', component: ContatoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logoff', component: LogoffComponent },  
  { path: 'ficha-treino', component: FichaTreinoComponent, canActivate: [AuthGuardService] },
  { path: 'ficha-treino/editar', component: EditarFichaTreinoComponent, canActivate: [AuthGuardService] },
  { path: 'usuario', component: UsuarioComponent, children:[
    { path: '', component: ListaUsuarioComponent, canActivate: [AuthGuardService] },
    { path: ':usuario', component: CadastroUsuarioComponent, canActivate: [AuthGuardService] }    
  ] }
]

@NgModule({
  declarations: [
    MinimizeTextPipe,
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ContatoComponent,
    LoginComponent,
    FichaTreinoComponent,
    LogoffComponent,
    EditarFichaTreinoComponent,
    UsuarioComponent,
    ListaUsuarioComponent,
    CadastroUsuarioComponent,
    TrocaSenhaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService, AuthGuardService, PlanoTreinoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
