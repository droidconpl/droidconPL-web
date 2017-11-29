import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

export interface Agenda {
    dayId: number;
    slotId: number;
    startHour: string;
    endHour: string;
    length: string;
    session1id: number;
    session2id: number;
    session3id: number;
    text: string;
    imageurl: string;
}

@Injectable()
export class AgendaService {

    constructor(private db: AngularFireDatabase) {}

    get(): AngularFireList<Agenda> {
        return this.db.list<Agenda>(
            'agenda'
        );
    }
}