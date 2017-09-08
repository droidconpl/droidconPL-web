import { NgModule } from '@angular/core';
import { AppSectionModule } from '../shared/section/section.module';
import { AppMainComponent } from './app-main.component';

@NgModule({
    imports: [
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