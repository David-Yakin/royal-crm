import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../customer';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'customers-table',
  templateUrl: './customers-table.component.html',
  styles: [],
})
export class CustomersTableComponent {
  @Input() customers: Customer[] = [];
  @Output() onDeleteCustomer = new EventEmitter();

  constructor(private CS: CustomerService) {
    this.customers = CS.getAll();
  }

  deleteCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.customers = this.CS.getAll();
    this.onDeleteCustomer.emit(this.customers);
  }
}
