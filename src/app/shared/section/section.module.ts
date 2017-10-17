import { NgModule } from '@angular/core';
import { AppSectionComponent } from './section.component';
import { AppHeaderComponent } from './appHeader/app-header.component';

@NgModule({
  declarations: [
      AppHeaderComponent,
      AppSectionComponent,
  ],
  exports: [
      AppSectionComponent,
  ]
})
export class AppSectionModule {

}