import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSectionModule } from '../shared/section/section.module';
import { AppRoutingModule } from '../app-routing.module';
import {TalksComponent} from "./talks.component";
import {TalkComponent} from "./talk/talk.component";
import {TalkSiteComponent} from "./talkSite/talk-site.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        AppSectionModule,
        SharedModule,
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