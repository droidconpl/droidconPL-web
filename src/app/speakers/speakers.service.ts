import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

export interface Speaker {
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

@Injectable()
export class SpeakersService {

    constructor(private db: AngularFireDatabase) {}

    get(): AngularFireList<Speaker> {
        return this.db.list<Speaker>(
            'speakers',
            ref => ref.orderByChild('published').equalTo(true),
        );
    }

    getLimited(limit: number): AngularFireList<Speaker> {
        return this.db.list<Speaker>('speakers', ref =>
            ref.orderByChild('published')
                .equalTo(true)
                .limitToFirst(limit)
        );
    }

    getByKey(key: string): AngularFireList<Speaker> {
        return this.db.list<Speaker>('speakers', ref =>
            ref.orderByChild('key')
                .equalTo(key)
                .limitToFirst(1)
        );
    }
}