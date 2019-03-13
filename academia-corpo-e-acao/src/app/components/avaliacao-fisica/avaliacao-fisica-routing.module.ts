import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AvaliacaoFisicaComponent } from "./avaliacao-fisica.component";
import { AuthGuardService } from "../../services/auth-guard.service";
import { EditarComposicaoCorporalComponent } from "./editar-composicao-corporal/editar-composicao-corporal.component";
import { EditarMedidasAntropometricasComponent } from "./editar-medidas-antropometricas/editar-medidas-antropometricas.component";
import { EditarAvaliacaoFisicaComponent } from "./editar/editar-avaliacao-fisica.component";
import { CommonModule } from "@angular/common";
import { ListaAvaliacaoFisicaComponent } from "./lista/lista-avaliacao-fisica.component";

const appRoutes :Routes = [  
    { path: '', component: AvaliacaoFisicaComponent, 
       children: [
        { path: ':usuario', component: ListaAvaliacaoFisicaComponent, canActivate: [AuthGuardService] }, 
        { path: ':usuario/editar/:avaliacao', component: EditarAvaliacaoFisicaComponent, canActivate: [AuthGuardService] }, 
        { path: ':usuario/composicao-corporal/editar/:avaliacao', component: EditarComposicaoCorporalComponent, canActivate: [AuthGuardService] },
        { path: ':usuario/med-antrop/editar/:avaliacao', component: EditarMedidasAntropometricasComponent, canActivate: [AuthGuardService] }         
       ]  
    }
  ]

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule.forChild(appRoutes) ],
    exports: [ RouterModule ]
})
export class AvaliacaoFisicaRoutingModule {}