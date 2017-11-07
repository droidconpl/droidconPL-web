import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

export interface Talk {
    speakerkey: string;
    title: string;
    description: string;
    duration: string;
    tags: string;
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

    //TODO: fix for edge cases
    getBySpeakerKey(speakerKey: string): AngularFireList<Talk> {
        return this.db.list<Talk>('talks', ref =>
            ref.orderByChild('speakerkey')
                .limitToFirst(1)
        );
    }
}