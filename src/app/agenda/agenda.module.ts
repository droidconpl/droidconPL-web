import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppSectionModule} from "../shared/section/section.module";
import {AgendaComponent} from "./agenda.component";
import {Tabs} from "./tabs/tabs.component";
import {Tab} from "./tabs/tab.component";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
    imports: [
        CommonModule,
        AppSectionModule,
        AppRoutingModule,
    ],
    declarations: [
        AgendaComponent,
        Tabs,
        Tab,
    ],
    exports: [
        AgendaComponent,
    ]
})
export class AgendaModule {
}