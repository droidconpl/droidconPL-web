import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppSectionModule} from "../shared/section/section.module";
import {SponsorsComponent} from "./sponsors.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        AppSectionModule,
        SharedModule,
    ],
    declarations: [
        SponsorsComponent
    ],
    exports: [
        SponsorsComponent
    ]
})
export class SponsorsModule {
}