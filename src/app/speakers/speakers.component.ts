import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

interface Speaker {
    id: number;
    name: string;
    surname: string;
    title: string;
    biography: string;
    twitter?: string;
    facebook?: string;
    github?: string;
    linkedin?: string;
    website?: string;
    photourl: string;
    published: boolean;
}

@Component({
    selector: 'speakers',
    templateUrl: './speakers.component.html',
    styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent {
    public speakers: any;

    constructor(public af: AngularFireDatabase) {
        af.list<Speaker>('speakers', ref => ref.orderByChild('published').equalTo(true))
            .valueChanges()
            .subscribe(speakers => this.speakers = speakers);
    }

}