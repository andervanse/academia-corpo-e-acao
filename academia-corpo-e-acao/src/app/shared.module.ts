import { NgModule } from "@angular/core";
import { MinimizeTextPipe } from "./pipes/minimize-text.pipe";


@NgModule({
    declarations: [
        MinimizeTextPipe
    ],
    exports: [
        MinimizeTextPipe
    ]
})
export class SharedModule {}