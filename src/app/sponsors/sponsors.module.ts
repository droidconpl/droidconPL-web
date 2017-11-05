import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppSectionModule} from "../shared/section/section.module";
import {SponsorsComponent} from "./sponsors.component";

@NgModule({
    imports: [
        CommonModule,
        AppSectionModule,
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