import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
      AppRoutingModule,
  ],
  declarations: [
      NavigationComponent,
  ],
  exports: [
      NavigationComponent,
  ]
})
export class NavigationModule {

}