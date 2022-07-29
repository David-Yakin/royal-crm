import { Component, Input } from '@angular/core';
import { SideNavLink } from './side-nav-link';

@Component({
  selector: 'side-nav-link',
  templateUrl: './side-nav-link.component.html',
  styles: [
    `
      .active {
        background: #000;
      }
    `,
  ],
})
export class SideNavLinkComponent {
  @Input() link: SideNavLink = { text: '', icon: '', link: '' };
}
