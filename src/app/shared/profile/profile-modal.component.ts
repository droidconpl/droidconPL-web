import { Component, HostListener } from '@angular/core';
import { BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { CloseGuard, DialogRef, ModalComponent } from 'ngx-modialog';
import { Speaker } from '../../speakers/speakers.service';

export class CustomModalContext extends BSModalContext {
    public person: Speaker;
}

@Component({
    selector: 'profile-modal',
    templateUrl: './profile-modal.component.html',
    styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements CloseGuard, ModalComponent<CustomModalContext> {
    context: CustomModalContext;

    @HostListener('document:keydown.escape', ['$event'])
    onKeydownHandler(event: KeyboardEvent) {
        this.close();
    }

    constructor(public dialog: DialogRef<CustomModalContext>) {
        // dialog.context.dialogClass = 'modal-dialog my-custom-dialog';
        this.context = dialog.context;
        dialog.setCloseGuard(this);
    }

    beforeDismiss(): boolean {
        return true;
    }

    close() {
        this.dialog.close();
    }
}
