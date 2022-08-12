import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [],
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer | void = undefined;
  constructor(private AR: ActivatedRoute, private CS: CustomerService) {}

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.customer = this.CS.getCustomer(
        id!,
        (customer: Customer | void) => (this.customer = customer)
      );
    });
  }
}
