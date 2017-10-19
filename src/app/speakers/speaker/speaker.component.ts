import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TalksService } from '../../talks/talks.service';
import { SpeakersService } from '../speakers.service';

@Component({
    selector: 'speaker',
    templateUrl: './speaker.component.html',
    styleUrls: ['./speaker.component.scss'],
    providers: [
        SpeakersService,
        TalksService,
    ]
})
export class SpeakerComponent implements OnInit {
    public speaker: any;
    public key: string;
    public talk: any;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private speakersService: SpeakersService,
                private talksService: TalksService) {
        this.route.params.subscribe(params => {
            this.key = params['key'];
        });
    }

    ngOnInit() {
        this.get(this.key);
        this.getTalk(this.key);
    }

    get(key: string): void {
        this.speakersService.getByKey(key)
            .valueChanges()
            .subscribe(speaker => {
                this.speaker = speaker[0];
            });
    }

    getTalk(key: string): void {
        this.talksService.getBySpeakerKey(key)
            .valueChanges()
            .subscribe(talk => {
                this.talk = talk[0];
            })
    }
}