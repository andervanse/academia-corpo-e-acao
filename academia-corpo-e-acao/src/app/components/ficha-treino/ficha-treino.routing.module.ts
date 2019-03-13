import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FichaTreinoComponent } from "./ficha-treino.component";
import { FichaTreinoListaComponent } from "./lista/ficha-treino-lista.component";
import { AuthGuardService } from "../../services/auth-guard.service";
import { FichaTreinoAlunoEditarComponent } from "./editar/ficha-treino-editar.component";
import { Routes, RouterModule } from "@angular/router";


const fichaTreinoRoute: Routes = [
    {
        path: '', component: FichaTreinoComponent,
        children: [
            { path: '', component: FichaTreinoListaComponent, canActivate: [AuthGuardService] },
            { path: 'editar/template/:treino', component: FichaTreinoAlunoEditarComponent, canActivate: [AuthGuardService] },
            { path: 'editar/:usuario', component: FichaTreinoAlunoEditarComponent, canActivate: [AuthGuardService] }
        ]
    },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(fichaTreinoRoute)
    ],
    exports: [RouterModule]
})
export class FichaTreinoRoutingModule { }