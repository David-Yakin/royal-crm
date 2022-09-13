import { Component } from '@angular/core';

@Component({
  selector: 'spinner-loader',
  template: `
    <div class="loader">
      <div class="loader-content"></div>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  `,
  styleUrls: ['./spinner-loader.component.scss'],
})
export class SpinnerLoaderComponent {}
