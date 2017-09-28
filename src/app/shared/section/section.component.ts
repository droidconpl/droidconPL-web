import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: [
      '../containers.scss',
      './section.component.scss'
  ]
})
export class AppSectionComponent {
  @Input() public title: string;
}