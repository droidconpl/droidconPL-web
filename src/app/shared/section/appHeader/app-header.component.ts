import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: [
        '../../containers.scss',
        './app-header.component.scss'
    ]
})
export class AppHeaderComponent {
    @Input() title: string;
}