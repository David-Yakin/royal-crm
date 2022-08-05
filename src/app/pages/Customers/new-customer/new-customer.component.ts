import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styles: [],
})
export class NewCustomerComponent {
  constructor(private CS: CustomerService, private routerService: Router) {}

  onSubmit(customer: Customer) {
    this.CS.add(customer);
    this.routerService.navigate(['/customers']);
  }
}
