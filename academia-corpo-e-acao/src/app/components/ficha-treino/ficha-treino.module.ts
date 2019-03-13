import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PlanoTreinoService } from "../../services/plano-treino.service";
import { FichaTreinoComponent } from "./ficha-treino.component";
import { FichaTreinoListaComponent } from "./lista/ficha-treino-lista.component";
import { FichaTreinoRoutingModule } from "./ficha-treino.routing.module";
import { FichaTreinoAlunoEditarComponent } from "./editar/ficha-treino-editar.component";
import { SharedModule } from "../../shared.module";


@NgModule({
    declarations: [
        FichaTreinoComponent,    
        FichaTreinoAlunoEditarComponent,
        FichaTreinoListaComponent,    
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        FichaTreinoRoutingModule
    ],
    providers: [ PlanoTreinoService ]
})
export class FichaTreinoModule {}