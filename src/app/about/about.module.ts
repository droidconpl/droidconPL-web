import { NgModule } from '@angular/core';
import { CodeOfConductComponent } from './code-of-conduct.component';
import { FaqComponent } from './faq.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
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