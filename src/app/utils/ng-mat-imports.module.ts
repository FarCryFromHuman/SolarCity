import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";

const moduleList = [
    MatGridListModule
]

@NgModule({
    imports: (function () { return moduleList })(),
    exports: (function () { return moduleList })()
})
export class NgMaterialImports { }