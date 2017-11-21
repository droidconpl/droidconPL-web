import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSectionModule } from '../shared/section/section.module';
import { AppRoutingModule } from '../app-routing.module';
import {TalksComponent} from "./talks.component";
import {TalkComponent} from "./talk/talk.component";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        AppSectionModule,
    ],
    declarations: [
        TalksComponent,
        TalkComponent,
    ],
    exports: [
        TalksComponent,
        TalkComponent,
    ]
})
export class TalksModule {}