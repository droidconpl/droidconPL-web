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

export const firebaseConfig = {
    apiKey: "AIzaSyCI9EMJZT83cWBYICcf_q9yeOFld5aHrsg",
    authDomain: "droidconpl-test.firebaseapp.com",
    databaseURL: "https://droidconpl-test.firebaseio.com",
    projectId: "droidconpl-test",
    storageBucket: "droidconpl-test.appspot.com",
    messagingSenderId: "77598036364"
};

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppMainModule,
        AppFooterModule,
        AboutModule,
        NavigationModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
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