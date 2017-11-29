import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

export interface Talk {
    id: number;
    title: string;
    description: string;
    duration: string;
    tags: string;
    published: boolean;
    speakerkey: string;
}

@Injectable()
export class TalksService {

    constructor(private db: AngularFireDatabase) {}

    get(): AngularFireList<Talk> {
        return this.db.list<Talk>(
            'talks',
            ref => ref.orderByChild('published').equalTo(true),
        );
    }

    getById(id: number): AngularFireList<Talk> {
        return this.db.list<Talk>(
            'talks',
            ref => ref.orderByChild('id').equalTo(id),
        );
    }

    getBySpeakerKey(speakerKey: string): AngularFireList<Talk> {
        return this.db.list<Talk>('talks', ref =>
            ref.orderByChild('speakerkey').equalTo(speakerKey)
        );
    }
}