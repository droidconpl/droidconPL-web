import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppMainModule} from './appMain/app-main.module';
import {AppFooterModule} from './appFooter/app-footer.module';
import {AboutModule} from './about/about.module';
import { NavigationModule } from './navigation/navigation.module';

import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AppComponent} from './app.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SpeakersModule } from './speakers/speakers.module';
import { bootstrap4Mode, BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { ModalModule } from 'ngx-modialog';
import {TalksModule} from "./talks/talks.module";

bootstrap4Mode();

export const firebaseConfig = {
    apiKey: "AIzaSyAWT7UTaCaGsGDMr1mjQ8-Z7PtU4-lXF0M",
    authDomain: "droidconpl2017.firebaseapp.com",
    databaseURL: "https://droidconpl2017.firebaseio.com",
    projectId: "droidconpl2017",
    storageBucket: "droidconpl2017.appspot.com",
    messagingSenderId: "25196666268"
};

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppMainModule,
        AppFooterModule,
        AboutModule,
        SpeakersModule,
        TalksModule,
        NavigationModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
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