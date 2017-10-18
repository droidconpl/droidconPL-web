import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './appHeader/app-header.component';
import { AppSectionComponent } from './section.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        AppHeaderComponent,
        AppSectionComponent,
    ],
    exports: [
        AppSectionComponent,
    ]
})
export class AppSectionModule {

}