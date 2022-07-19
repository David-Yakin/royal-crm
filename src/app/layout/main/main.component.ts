import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    `
      .min-hieght-88 {
        min-height: 88vh;
      }
    `,
  ],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
