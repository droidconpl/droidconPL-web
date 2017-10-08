import {Component} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

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

    constructor(public af: AngularFireDatabase) {
        af.list<Partner>('partners', ref => ref.orderByChild('published').equalTo(true))
            .valueChanges()
            .subscribe(partners => this.partners = partners);
    }
}