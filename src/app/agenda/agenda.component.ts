import {Component, OnChanges, OnInit} from '@angular/core';
import {Agenda, AgendaService} from "./agenda.service";
import {Talk, TalksService} from "../talks/talks.service";

@Component({
    selector: 'agenda',
    templateUrl: './agenda.component.html',
    styleUrls: [
        './agenda.component.scss'
    ],
    providers: [
        AgendaService,
        TalksService,
    ]
})
export class AgendaComponent {
    public agenda: any[];
    public talks: any[];

    constructor(private agendaService: AgendaService,
                private talkService: TalksService,) {
        this.get();
        this.getTalks();

    }

    get(): void {
        this.agendaService.get()
            .valueChanges()
            .subscribe(agenda => this.agenda = agenda);
    }

    getTalks(): void {
        this.talkService.get()
            .valueChanges()
            .subscribe(talks => this.talks = talks);
    }

    filterDay(dayId: number): Agenda[] {
        let day: Agenda[] = [];
        if( this.agenda ) {
            day = this.agenda.filter(rows => rows.dayid === dayId);
        }
        return day;
    }

    filterTalk(talkId: number): any {
        let talk: Talk[];
        if( this.talks && talkId) {
            talk = this.talks.filter(talk => talk.id === talkId)[0].title;
        }
        return talk;
    }

    setColspan(session1id: number): number {
        return session1id ? 1 : 3;
    }
}