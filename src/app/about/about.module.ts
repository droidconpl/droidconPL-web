import {NgModule} from '@angular/core';
import {CodeOfConductComponent} from './code-of-conduct.component';
import {FaqComponent} from './faq.component';
import {AppRoutingModule} from '../app-routing.module';
import {AppSectionModule} from "../shared/section/section.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        AppSectionModule,
        AppRoutingModule,
        SharedModule,
    ],
    declarations: [
        CodeOfConductComponent,
        FaqComponent,
    ],
    exports: [
        CodeOfConductComponent,
        FaqComponent,
    ]
})
export class AboutModule {
}