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
import { FichaTreinoComponent } from './components/ficha-treino/ficha-treino.component';
import { LogoffComponent } from './components/logoff/logoff.component';
import { PlanoTreinoService } from './services/plano-treino.service';
import { FichaTreinoAlunoEditarComponent } from './components/ficha-treino/editar/ficha-treino-editar.component';
import { MinimizeTextPipe } from './pipes/minimize-text.pipe';
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

import { FichaTreinoAlunoComponent } from './components/ficha-treino/aluno/ficha-treino-aluno.component';
import { FichaTreinoListaComponent } from './components/ficha-treino/lista/ficha-treino-lista.component';
import { AvaliacaoFisicaModule } from './components/avaliacao-fisica/avaliacao-fisica.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    MinimizeTextPipe,
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ContatoComponent,
    LoginComponent,
    LogoffComponent,
    FichaTreinoAlunoEditarComponent,
    UsuarioComponent,
    ListaUsuarioComponent,
    CadastroUsuarioComponent,
    SenhaUsuarioComponent,
    InfoAlunoComponent,
    FichaTreinoComponent,    
    FichaTreinoAlunoComponent,
    FichaTreinoListaComponent,
    AvaliacaoFisicaAlunoComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AvaliacaoFisicaModule,   
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
