import { Component, Input } from '@angular/core';

@Component({
  selector: 'top-nav-link',
  templateUrl: './top-nav-link.component.html',
  styles: [],
})
export class TopNavLinkComponent {
  @Input() text: string = '';
  @Input() to: string = '';
}
