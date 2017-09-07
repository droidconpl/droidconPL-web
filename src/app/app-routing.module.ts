import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CodeOfConductComponent } from './about/code-of-conduct.component';
import { FaqComponent } from './about/faq.component';
import { AppMainComponent } from './appMain/app-main.component';

const appRoutes: Routes = [
  { path: 'code-of-conduct', component: CodeOfConductComponent },
  { path: 'faq', component: FaqComponent },
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
export class AppRoutingModule {}