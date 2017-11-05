import {Component} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

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

    constructor(public af: AngularFireDatabase) {
        af.list<Sponsor>('sponsors', ref => ref.orderByChild('published').equalTo(true))
            .valueChanges()
            .subscribe(sponsors => this.sponsors = sponsors);
    }
}