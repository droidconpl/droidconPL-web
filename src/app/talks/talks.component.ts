import { Component, OnInit } from '@angular/core';
import { TalksService } from "./talks.service";

@Component({
    selector: 'talks',
    templateUrl: './talks.component.html',
    styleUrls: [
        './talks.component.scss',
        '../shared/link/link.component.scss',
    ],
    providers: [
        TalksService,
    ]
})
export class TalksComponent implements OnInit {
    public talks: any;

    constructor(private talksService: TalksService,) {
    }

    ngOnInit() {
        this.get();
    }

    get(): void {
        this.talksService.get()
            .valueChanges()
            .subscribe(talks => this.talks = talks );
    }
}