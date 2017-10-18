import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CodeOfConductComponent } from './about/code-of-conduct.component';
import { FaqComponent } from './about/faq.component';
import { AppMainComponent } from './appMain/app-main.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakerComponent } from './speakers/speaker/speaker.component';

const appRoutes: Routes = [
    { path: 'code-of-conduct', component: CodeOfConductComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'speakers', component: SpeakersComponent },
    { path: 'speakers/:key', component: SpeakerComponent },
    { path: '', component: AppMainComponent },
    //TODO: 404 Page not found component to create
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}