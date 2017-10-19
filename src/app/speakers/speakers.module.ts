import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSectionModule } from '../shared/section/section.module';
import { SpeakersComponent } from './speakers.component';
import { ProfileModule } from '../shared/profile/profile.module';
import { SpeakerComponent } from './speaker/speaker.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        AppSectionModule,
        ProfileModule,
    ],
    declarations: [
        SpeakersComponent,
        SpeakerComponent,
    ],
    exports: [
        SpeakersComponent,
        SpeakerComponent,    ]
})
export class SpeakersModule {}