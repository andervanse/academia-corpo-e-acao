import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { SenhaUsuarioComponent } from './components/usuario/senha-usuario/senha-usuario.component';
import { AlunoService } from './services/aluno.service';
import { JwtInterceptor } from './services/jwt-interceptor.service';
import { ErrorInterceptor } from './services/error-interceptor.service';
import { InfoUsuarioComponent } from './components/usuario/info-usuario/info-usuario.component';

const appRoutes :Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'contato', component: ContatoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logoff', component: LogoffComponent },  
  { path: 'ficha-treino', component: FichaTreinoComponent, canActivate: [AuthGuardService] },
  { path: 'ficha-treino/editar', component: EditarFichaTreinoComponent, canActivate: [AuthGuardService] },
  { path: 'usuario', component: UsuarioComponent, 
     children:[
       { path: '', component: ListaUsuarioComponent, canActivate: [AuthGuardService] },
       { path: 'info-usuario', component: InfoUsuarioComponent, canActivate: [AuthGuardService] },
       { path: 'senha-usuario/:usuario', component: SenhaUsuarioComponent, canActivate: [AuthGuardService] },
       { path: ':usuario', component: CadastroUsuarioComponent, canActivate: [AuthGuardService] }    
     ]  
  },
  { path: '**', redirectTo: '' }
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
    SenhaUsuarioComponent,
    InfoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthService,
    AuthGuardService,
    PlanoTreinoService,
    AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
