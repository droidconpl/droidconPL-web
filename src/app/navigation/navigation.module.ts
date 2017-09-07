import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
      CommonModule,
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