import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { SpeakersService } from '../speakers.service';

@Component({
    selector: 'speaker',
    templateUrl: './speaker.component.html',
    styleUrls: ['./speaker.component.scss'],
    providers: [
        SpeakersService
    ]
})
export class SpeakerComponent implements OnInit {
    public speaker: any;
    public key: string;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private speakersService: SpeakersService) {
        this.route.params.subscribe(params => {
            this.key = params['key'];
        });
    }

    ngOnInit() {
        this.get(this.key);
    }

    get(key: string): void {
        this.speakersService.getByKey(key)
            .valueChanges()
            .subscribe(speaker => {
                this.speaker = speaker[0];
            });
    }
}