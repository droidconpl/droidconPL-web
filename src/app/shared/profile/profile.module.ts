import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ProfileModalComponent } from './profile-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
    ],
    entryComponents: [
        ProfileModalComponent,
    ],
    declarations: [
        ProfileComponent,
        ProfileModalComponent,
    ],
    exports: [
        ProfileComponent,
    ]
})
export class ProfileModule {
}