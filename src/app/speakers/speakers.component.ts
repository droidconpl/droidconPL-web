import { Component, OnInit } from '@angular/core';
import { SpeakersService } from './speakers.service';

@Component({
    selector: 'speakers',
    templateUrl: './speakers.component.html',
    styleUrls: ['./speakers.component.scss'],
    providers: [
        SpeakersService
    ]
})
export class SpeakersComponent implements OnInit {
    public speakers: any;

    constructor(private speakersService: SpeakersService) {
    }

    ngOnInit() {
        this.get();
    }

    get(): void {
        this.speakersService.get()
            .valueChanges()
            .subscribe(speakers => this.speakers = speakers);
    }
}