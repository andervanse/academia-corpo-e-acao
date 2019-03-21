import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';

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
import { AlunoService } from './services/aluno.service';
import { JwtInterceptor } from './services/interceptors/jwt-interceptor.service';
import { ErrorInterceptor } from './services/interceptors/error-interceptor.service';
import { AvaliacaoFisicaService } from './services/avaliacao-fisica.service';
import { AppRoutingModule } from './app-routing.module';
import { AvaliacaoFisicaAlunoComponent } from './components/avaliacao-fisica/aluno/avaliacao-fisica-aluno.component';
import { FichaTreinoAlunoComponent } from './components/ficha-treino/aluno/ficha-treino-aluno.component';
import { PostagemHomeService } from './services/postagem-home.service';
import { LoadingService } from './services/loading.service';
import { LoadingInterceptor } from './services/interceptors/loading-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ContatoComponent,
    LoginComponent,
    LogoffComponent,
    AvaliacaoFisicaAlunoComponent,
    FichaTreinoAlunoComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,     
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    AuthService,
    AuthGuardService,
    PlanoTreinoService,
    AlunoService,
    AvaliacaoFisicaService,
    PostagemHomeService,
    LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
