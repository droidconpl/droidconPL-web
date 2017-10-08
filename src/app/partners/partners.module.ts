import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppSectionModule} from "../shared/section/section.module";
import {PartnersComponent} from "./partners.component";

@NgModule({
    imports: [
        CommonModule,
        AppSectionModule,
    ],
    declarations: [
        PartnersComponent
    ],
    exports: [
        PartnersComponent
    ]
})
export class PartnersModule {
}