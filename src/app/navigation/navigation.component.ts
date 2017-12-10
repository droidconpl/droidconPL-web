import {Component, ElementRef, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {WINDOW} from "./window.service";

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [
        '../shared/containers.scss',
        './nav-icon-toggler.scss',
        './navigation.component.scss'
    ],
    host: {'[class.fixed]': 'navIsFixed'}
})
export class NavigationComponent implements OnInit {
    @ViewChild('navbarToggler') navbarToggler: ElementRef;
    public isOpen: boolean = false;
    public programAvailable: boolean = true;
    public navIsFixed: boolean = false;

    constructor(@Inject(DOCUMENT) private document: Document,
                @Inject(WINDOW) private window: Window) { }

    ngOnInit() { }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (number > 100) {
            this.navIsFixed = true;
        } else if (this.navIsFixed && number < 10) {
            this.navIsFixed = false;
        }
    }

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