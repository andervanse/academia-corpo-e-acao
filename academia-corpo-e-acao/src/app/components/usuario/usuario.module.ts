import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuarioComponent } from "./usuario.component";
import { ListaUsuarioComponent } from "./lista/lista-usuario.component";
import { CadastroUsuarioComponent } from "./cadastro/cadastro-usuario.component";
import { SenhaUsuarioComponent } from "./senha/senha-usuario.component";
import { InfoAlunoComponent } from "./info/info-aluno.component";
import { UsuarioRoutingModule } from "./usuario.routing.module";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        UsuarioComponent,
        ListaUsuarioComponent,
        CadastroUsuarioComponent,
        SenhaUsuarioComponent,
        InfoAlunoComponent
    ],
    imports: [        
        CommonModule,
        FormsModule,
        UsuarioRoutingModule
    ]
})
export class UsuarioModule { }