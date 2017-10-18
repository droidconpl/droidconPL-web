import { NgModule } from '@angular/core';
import { AppSectionModule } from '../shared/section/section.module';
import { AppMainComponent } from './app-main.component';
import {CommonModule} from "@angular/common";
import {PartnersModule} from "../partners/partners.module";
import { SpeakerPreview } from './speakerPreview/speaker-preview.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

@NgModule({
    imports: [
        CommonModule,
        AppSectionModule,
        PartnersModule,
        NgxCarouselModule,
    ],
    declarations: [
        AppMainComponent,
        SpeakerPreview,
    ],
    exports: [
        AppMainComponent,
    ]
})
export class AppMainModule {
}