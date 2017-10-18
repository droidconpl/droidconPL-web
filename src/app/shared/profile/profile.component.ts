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

    // onClick(e: Event) {
    //     e.preventDefault();
    //     this.modal.alert()
    //         .size('lg')
    //         .showClose(true)
    //         .title('A simple Alert style modal window')
    //         .body(`
    //         <h4>Alert is a classic (title/body/footer) 1 button modal window that
    //         does not block.</h4>
    //         <b>Configuration:</b>
    //         <ul>
    //             <li>Non blocking (click anywhere outside to dismiss)</li>
    //             <li>Size large</li>
    //             <li>Dismissed with default keyboard key (ESC)</li>
    //             <li>Close wth button click</li>
    //             <li>HTML content</li>
    //         </ul>`)
    //         .open();
    // }

    onCustomClick() {
        event.preventDefault();
        this.modal.open(ProfileModalComponent,  overlayConfigFactory(this.profile, BSModalContext));
    }
}