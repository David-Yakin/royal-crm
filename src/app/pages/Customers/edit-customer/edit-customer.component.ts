import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styles: [],
})
export class EditCustomerComponent implements OnInit {
  customer: Customer | void = undefined;
  id: string | null = null;
  createdAt: Date | void = undefined;

  constructor(
    private CS: CustomerService,
    private AR: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit(customer: Customer) {
    customer.createdAt = this.createdAt!;
    customer._id = this.id!;
    this.CS.edit(customer);
    this.router.navigate(['/customers']);
  }

  resetForm() {
    console.log('in reset form father');

    this.CS.getCustomer(this.id!, ({ ...customer }: Customer) => {
      this.customer = customer;
    });
  }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.id = id;

      this.CS.getCustomer(id!, ({ ...customer }: Customer) => {
        this.customer = customer;
        this.createdAt = customer.createdAt;
      });
    });
  }
}
