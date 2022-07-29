import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customers: Customer[] = [
    {
      _id: '1',
      firstName: 'Regular',
      lastName: 'User',
      email: 'user@gmail.com',
      phone: '050-0000000',
      address: {
        country: 'israel',
        city: 'tel-aviv',
        street: 'rotshild',
        houseNumber: 0,
        zip: 1234,
      },
      createdAt: new Date(),
      notes: 'a very good customer!',
    },
    {
      _id: '2',
      firstName: 'admin',
      lastName: 'User',
      email: 'admin@gmail.com',
      phone: '050-0000000',
      address: {
        country: 'israel',
        city: 'tel-aviv',
        street: 'rotshild',
        houseNumber: 0,
        zip: 1234,
      },
      createdAt: new Date(),
      notes: 'a very bad customer!',
    },
  ];

  getAll(): Customer[] {
    return this.customers;
  }
}
