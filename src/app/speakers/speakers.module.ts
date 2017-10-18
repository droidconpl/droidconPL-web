import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSectionModule } from '../shared/section/section.module';
import { SpeakersComponent } from './speakers.component';
import { ProfileModule } from '../shared/profile/profile.module';

@NgModule({
    imports: [
        CommonModule,
        AppSectionModule,
        ProfileModule,
    ],
    declarations: [
        SpeakersComponent,
    ],
    exports: [
        SpeakersComponent,
    ]
})
export class SpeakersModule {}