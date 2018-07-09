import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

const moduleList = [
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule
]

@NgModule({
    imports: moduleList,
    exports: moduleList
})
export class NgMaterialImports { }