import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppSectionModule} from "../shared/section/section.module";
import {PartnersComponent} from "./partners.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        AppSectionModule,
        SharedModule,
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