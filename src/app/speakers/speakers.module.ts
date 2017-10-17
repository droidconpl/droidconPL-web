import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSectionModule } from '../shared/section/section.module';
import { SpeakersComponent } from './speakers.component';

@NgModule({
    imports: [
        CommonModule,
        AppSectionModule,
    ],
    declarations: [
        SpeakersComponent,
    ],
    exports: [
        SpeakersComponent,
    ]
})
export class SpeakersModule {}