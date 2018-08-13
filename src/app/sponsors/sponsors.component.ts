import {Component} from '@angular/core';

interface Sponsor {
    name: string;
    type: string;
    logourl?: string;
    websiteurl?: string;
    published: boolean;
}

@Component({
    selector: 'sponsors',
    templateUrl: './sponsors.component.html',
    styleUrls: [
        './sponsors.component.scss'
    ]
})
export class SponsorsComponent {
    public sponsors: any;
}