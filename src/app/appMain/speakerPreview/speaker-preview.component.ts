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
            grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
            slide: 3,
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
        this.speakersService.getLimited(6)
            .valueChanges()
            .subscribe(speakers => this.speakers = speakers);
    }

    public myFunc(event: Event) {
        console.log("loaded");
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
    }
}