import { NgModule } from '@angular/core';
import { AppSectionModule } from '../shared/section/section.module';
import { AppMainComponent } from './app-main.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        AppSectionModule,
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