import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TalksService} from "../talks.service";
import {SpeakersService} from "../../speakers/speakers.service";

@Component({
    selector: 'talk-site',
    templateUrl: './talk-site.component.html',
    styleUrls: [
        './talk-site.component.scss',
    ],
    providers: [
        TalksService,
        SpeakersService,
    ]
})
export class TalkSiteComponent implements OnInit {
    public speakers: any[];
    public id: number;
    public talk: any;

    constructor(private route: ActivatedRoute,
                private talksService: TalksService,
                private speakerService: SpeakersService,
    ) {
        this.route.params.subscribe(params => {
            this.id = Number(params['talkId']);
        });
    }

    ngOnInit() {
        this.get(this.id);
        this.getSpeakers(this.id);
    }

    get(id: number): void {
        this.talksService.getById(id)
            .valueChanges()
            .subscribe(talk => {
                this.talk = talk[0];
            });
    }

    getSpeakers(id: number): void {
        this.speakerService.getByTalkId(id)
            .valueChanges()
            .subscribe( speakers => this.speakers = speakers);
    }
}