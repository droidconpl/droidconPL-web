import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [
        '../shared/containers.scss',
        './nav-icon-toggler.scss',
        './navigation.component.scss'
    ]
})
export class NavigationComponent {
    @ViewChild('navbarToggler') navbarToggler: ElementRef;
    public isOpen: boolean = false;
    public programAvailable: boolean = false;

    public toggle() {
        this.isOpen = !this.isOpen;
    }

    public togglerVisible() {
        return this.navbarToggler.nativeElement.offsetParent !== null;
    }

    public toggleNav() {
        if (this.togglerVisible()) {
            this.navbarToggler.nativeElement.click();
        }
    }
}