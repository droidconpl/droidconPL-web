import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppMainModule} from './appMain/app-main.module';
import {AppFooterModule} from './appFooter/app-footer.module';
import {AboutModule} from './about/about.module';
import { NavigationModule } from './navigation/navigation.module';

import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AppComponent} from './app.component';
import { bootstrap4Mode, BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { ModalModule } from 'ngx-modialog';

bootstrap4Mode();

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppMainModule,
        AppFooterModule,
        AboutModule,
        NavigationModule,
        ModalModule.forRoot(),
        BootstrapModalModule,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}