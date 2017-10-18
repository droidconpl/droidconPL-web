import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { SpeakersService } from '../../speakers/speakers.service';

@Component({
    selector: 'speaker-preview',
    templateUrl: './speaker-preview.component.html',
    styleUrls: ['./speaker-preview.component.scss'],
    providers: [
        SpeakersService
    ]
})
export class SpeakerPreview implements OnInit {
    public carouselOne: NgxCarousel;
    public speakers: any;

    constructor(private speakersService: SpeakersService) {
    }

    ngOnInit() {
        this.getSpeakersPreview();
        this.carouselSetup();
    }

    carouselSetup(): void {
        this.carouselOne = {
            grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
            slide: 2,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        }
    }

    getSpeakersPreview(): void {
        this.speakersService.getLimited(9)
            .valueChanges()
            .subscribe(speakers => this.speakers = speakers);
    }
}