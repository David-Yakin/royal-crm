import { Component, Input } from '@angular/core';
import { Customer } from '../../customer';

@Component({
  selector: 'customers-folders',
  templateUrl: './customers-folders.component.html',
  styles: [],
})
export class CustomersFoldersComponent {
  @Input() customers: Array<Customer> = [];
}
