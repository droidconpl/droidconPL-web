import { Component, Input } from '@angular/core';
import { BSModalContext, Modal } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory } from 'ngx-modialog';
import { ProfileModalComponent } from './profile-modal.component';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    @Input() profile: any;

    constructor(public modal: Modal){}

    onClick() {
        event.preventDefault();
        this.modal.open(ProfileModalComponent,  overlayConfigFactory(this.profile, BSModalContext));
    }
}