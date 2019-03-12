import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AvaliacaoFisicaComponent } from "./avaliacao-fisica.component";
import { EditarAvaliacaoFisicaComponent } from "./editar/editar-avaliacao-fisica.component";
import { EditarComposicaoCorporalComponent } from "./editar-composicao-corporal/editar-composicao-corporal.component";
import { EditarMedidasAntropometricasComponent } from "./editar-medidas-antropometricas/editar-medidas-antropometricas.component";
import { AvaliacaoFisicaRoutingModule } from "./avaliacao-fisica-routing.module";
import { FormsModule } from "@angular/forms";
import { AvaliacaoFisicaService } from "../../services/avaliacao-fisica.service";
import { ListaAvaliacaoFisicaComponent } from './lista/lista-avaliacao-fisica.component';


@NgModule({
    declarations: [
        AvaliacaoFisicaComponent,
        EditarAvaliacaoFisicaComponent,
        EditarComposicaoCorporalComponent,
        EditarMedidasAntropometricasComponent,
        ListaAvaliacaoFisicaComponent 
    ],
    imports: [
        CommonModule,
        FormsModule,
        AvaliacaoFisicaRoutingModule
    ],
    providers: [ AvaliacaoFisicaService ]
})
export class AvaliacaoFisicaModule {}