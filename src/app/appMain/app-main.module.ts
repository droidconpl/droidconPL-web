import { NgModule } from '@angular/core';
import { AppSectionModule } from '../shared/section/section.module';
import { AppMainComponent } from './app-main.component';
import {CommonModule} from "@angular/common";
import {PartnersModule} from "../partners/partners.module";
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { AppRoutingModule } from '../app-routing.module';
import {SponsorsModule} from "../sponsors/sponsors.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        AppSectionModule,
        PartnersModule,
        SponsorsModule,
        NgxCarouselModule,
        AppRoutingModule,
        SharedModule,
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