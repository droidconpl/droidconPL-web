import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'sh-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    @Input() url: string = '';
    @Input() isExternal: boolean = false;
    private target: string;
    private rel: string;

    ngOnInit() {
        if(this.isExternal) {
            this.target = "_blank";
            this.rel = "noopener";
        }
    }
}