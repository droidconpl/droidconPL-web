import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppMainModule } from './appMain/app-main.module';
import { AppFooterModule } from './appFooter/app-footer.module';

@NgModule({
  imports: [
    BrowserModule,
    AppMainModule,
    AppFooterModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }