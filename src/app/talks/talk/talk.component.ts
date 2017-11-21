import { Component, Input, OnInit } from '@angular/core';
import { Talk } from "../talks.service";
import { SpeakersService} from "../../speakers/speakers.service";

@Component({
    selector: 'talk',
    templateUrl: './talk.component.html',
    styleUrls: [
        './talk.component.scss',
        '../../shared/link.scss',
    ],
    providers: [
        SpeakersService,
    ]
})
export class TalkComponent implements OnInit {
    @Input() talk: Talk;
    public toggled: boolean = false;
    public speakers: any[];

    constructor(private speakerService: SpeakersService,) {
    }

    ngOnInit() {
        this.getSpeakerByTalkId(this.talk.id);
    }

    toggle(): void {
        this.toggled = !this.toggled;
    }

    getSpeakerByTalkId(talkId: number): void {
        this.speakerService.getByTalkId(talkId)
            .valueChanges()
            .subscribe(speakers => this.speakers = speakers );
    }

}