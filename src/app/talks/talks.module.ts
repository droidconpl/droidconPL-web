import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSectionModule } from '../shared/section/section.module';
import { AppRoutingModule } from '../app-routing.module';
import {TalksComponent} from "./talks.component";
import {TalkComponent} from "./talk/talk.component";
import {TalkSiteComponent} from "./talkSite/talk-site.component";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        AppSectionModule,
    ],
    declarations: [
        TalksComponent,
        TalkComponent,
        TalkSiteComponent,
    ],
    exports: [
        TalksComponent,
        TalkComponent,
        TalkSiteComponent,
    ]
})
export class TalksModule {}