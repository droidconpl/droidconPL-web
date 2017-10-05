import {Component} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

interface Partner {
    name: string;
    logoFile: string;
    link?: string;
}

@Component({
    selector: 'partners',
    templateUrl: './partners.component.html',
    styleUrls: [
        './partners.component.scss'
    ]
})
export class PartnersComponent {
    private logoUrl: string = "src/assets/images/partners/";
    public partnerArray: Array<Partner> = [
        {
            name: "GDG DevFest Ukraine 2017",
            logoFile: this.logoUrl + "gdg-dev-fest-ukraine.svg",
            link: "https://devfest.gdg.org.ua"
        },
        {
            name: "Mobilization 2017",
            logoFile: this.logoUrl + "mobilization.png",
            link: "http://2017.mobilization.pl/"
        },
        {
            name: "Polish JUG",
            logoFile: this.logoUrl + "pjug.gif",
            link: "https://www.java.pl/"
        },
        {
            name: "ProAndroidDev",
            logoFile: this.logoUrl + "pro-android-dev.svg",
            link: "https://proandroiddev.com"
        },
        {
            name: "Crossweb",
            logoFile: this.logoUrl + "crossweb.png",
            link: "https://crossweb.pl"
        }
    ];

    public partners: any;

    constructor(public af: AngularFireDatabase) {
        af.list<Partner>('partners').valueChanges()
            .subscribe(partners => this.partners = partners);
    }
}