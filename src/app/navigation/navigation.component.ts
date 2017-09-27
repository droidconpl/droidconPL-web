import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [
        './navigation-container.scss',
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
        console.log(this.isOpen);
    }

    public toggleNav() {
        this.navbarToggler.nativeElement.click();
    }
}