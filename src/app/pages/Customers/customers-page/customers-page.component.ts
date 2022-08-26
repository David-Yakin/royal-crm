import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/components/search-bar/category';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'customers-page',
  templateUrl: './customers-page.component.html',
  styles: [],
})
export class CustomersPageComponent implements OnInit {
  customersRowData: Array<Customer> | void = undefined;
  customers: Array<Customer> = [];
  categories: Array<Category> = [
    { name: 'First Name', value: 'firstName' },
    { name: 'Last name', value: 'lastName' },
    { name: 'Email', value: 'email' },
    { name: 'Phone', value: 'phone' },
    { name: 'Notes', value: 'notes' },
  ];

  constructor(private CS: CustomerService) {
    this.customers = CS.getAll();
  }

  onSearch(array: Customer[]) {
    this.customers = array;
  }

  deleteCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.customers = this.CS.getAll();
  }

  ngOnInit() {
    this.customersRowData = this.CS.getAll();
    this.customers = [...this.customersRowData];
  }
}
