import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContatoComponent } from './components/contato/contato.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LogoffComponent } from './components/logoff/logoff.component';
import { PlanoTreinoService } from './services/plano-treino.service';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { ListaUsuarioComponent } from './components/usuario/lista/lista-usuario.component';
import { CadastroUsuarioComponent } from './components/usuario/cadastro/cadastro-usuario.component';
import { SenhaUsuarioComponent } from './components/usuario/senha/senha-usuario.component';
import { InfoAlunoComponent } from './components/usuario/info/info-aluno.component';

import { AlunoService } from './services/aluno.service';
import { JwtInterceptor } from './services/jwt-interceptor.service';
import { ErrorInterceptor } from './services/error-interceptor.service';

import { AvaliacaoFisicaService } from './services/avaliacao-fisica.service';
import { AvaliacaoFisicaAlunoComponent } from './components/avaliacao-fisica/aluno/avaliacao-fisica-aluno.component';

import { AppRoutingModule } from './app-routing.module';
import { FichaTreinoAlunoComponent } from './components/ficha-treino/aluno/ficha-treino-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ContatoComponent,
    LoginComponent,
    LogoffComponent,
    UsuarioComponent,
    ListaUsuarioComponent,
    CadastroUsuarioComponent,
    SenhaUsuarioComponent,
    InfoAlunoComponent,
    FichaTreinoAlunoComponent,
    AvaliacaoFisicaAlunoComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,     
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthService,
    AuthGuardService,
    PlanoTreinoService,
    AlunoService,
    AvaliacaoFisicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
