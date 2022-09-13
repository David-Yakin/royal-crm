import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/Users/user.service';

@Component({
  selector: 'right-top-nav',
  templateUrl: './right-top-nav.component.html',
  styles: [],
})
export class RightTopNavComponent implements OnInit {
  user: any;
  constructor(private US: UserService) {}

  ngOnInit(): void {
    this.US.getUserStatus((user: any) => (this.user = user));
  }
}
