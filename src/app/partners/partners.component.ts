import {Component} from '@angular/core';

interface Partner {
    name: string;
    type: string;
    logourl?: string;
    websitelink?: string;
    published: boolean;
}

@Component({
    selector: 'partners',
    templateUrl: './partners.component.html',
    styleUrls: [
        './partners.component.scss'
    ]
})
export class PartnersComponent {
    public partners: any;
}