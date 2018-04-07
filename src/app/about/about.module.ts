import {NgModule} from '@angular/core';
import {CodeOfConductComponent} from './code-of-conduct.component';
import {FaqComponent} from './faq.component';
import {AppRoutingModule} from '../app-routing.module';
import {AppSectionModule} from "../shared/section/section.module";

@NgModule({
    imports: [
        AppSectionModule,
        AppRoutingModule,
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