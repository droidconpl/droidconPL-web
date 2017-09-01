import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { AppFooterComponent } from './app-footer.component';

@NgModule({
  imports: [
    AppRoutingModule,
  ],
  declarations: [
    AppFooterComponent,
  ],
  exports: [
    AppFooterComponent,
  ]
})
export class AppFooterModule {
}