import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [
      './navigation-container.scss',
      './nav-icon-toggler.scss',
      './navigation.component.scss'
  ]
})
export class NavigationComponent {
  public isOpen: boolean = false;
  public programAvailable: boolean = false;
}