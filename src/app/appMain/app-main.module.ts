import { NgModule } from '@angular/core';
import { AppSectionModule } from '../shared/section/section.module';
import { AppMainComponent } from './app-main.component';
import {CommonModule} from "@angular/common";
import {PartnersModule} from "../partners/partners.module";

@NgModule({
    imports: [
        CommonModule,
        AppSectionModule,
        PartnersModule,
    ],
    declarations: [
        AppMainComponent,
    ],
    exports: [
        AppMainComponent,
    ]
})
export class AppMainModule {
}