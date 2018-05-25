import { NgModule } from '@angular/core';
import { AppSectionModule } from '../shared/section/section.module';
import { AppMainComponent } from './app-main.component';
import {CommonModule} from "@angular/common";
import {PartnersModule} from "../partners/partners.module";
import { SpeakerPreview } from './speakerPreview/speaker-preview.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { ProfileModule } from '../shared/profile/profile.module';
import { AppRoutingModule } from '../app-routing.module';
import {SponsorsModule} from "../sponsors/sponsors.module";
import {SharedModule} from "../shared/shared.module";
import {BackgroundComponent} from "./welcomeCard/background.component";
import {WelcomeBannerComponent} from "./welcomeCard/welcome-banner.component";

@NgModule({
    imports: [
        CommonModule,
        AppSectionModule,
        PartnersModule,
        SponsorsModule,
        NgxCarouselModule,
        ProfileModule,
        AppRoutingModule,
        SharedModule,
    ],
    declarations: [
        AppMainComponent,
        SpeakerPreview,
        WelcomeBannerComponent,
        BackgroundComponent,
    ],
    exports: [
        AppMainComponent,
    ]
})
export class AppMainModule {
}