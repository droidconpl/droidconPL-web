import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'sh-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
    @Input() hrefUrl?: string;
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