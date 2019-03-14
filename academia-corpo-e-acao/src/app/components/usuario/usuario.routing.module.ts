import { Routes, RouterModule } from "@angular/router";
import { InfoAlunoComponent } from "./info/info-aluno.component";
import { UsuarioComponent } from "./usuario.component";
import { ListaUsuarioComponent } from "./lista/lista-usuario.component";
import { SenhaUsuarioComponent } from "./senha/senha-usuario.component";
import { CadastroUsuarioComponent } from "./cadastro/cadastro-usuario.component";
import { AuthGuardService } from "../../services/auth-guard.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const usuarioRoutes :Routes = [
        
        { path: '', component: UsuarioComponent, 
        children: [
            { path: '', component: ListaUsuarioComponent, canActivate: [AuthGuardService] },        
            { path: 'info-aluno', component: InfoAlunoComponent, canActivate: [AuthGuardService] },                        
            { path: 'senha-usuario', component: SenhaUsuarioComponent, canActivate: [AuthGuardService] },
            { path: ':usuario', component: CadastroUsuarioComponent, canActivate: [AuthGuardService] },
        ]  
        }
    ];

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule.forChild(usuarioRoutes) ],
    exports: [ RouterModule ]    
})
export class UsuarioRoutingModule { } 