import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from '@angular/fire/firestore';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customers: Customer[] = [
    {
      _id: 'myIdIs1',
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

  collectionRef: CollectionReference<DocumentData> = collection(
    this.FS,
    'customers'
  );

  getAll() {
    let customers: any = [];
    onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((customer) => {
        customers.push({
          ...customer.data(),
          _id: customer.id,
        });
      });
    });
    return customers;
  }

  // getAll(): Customer[] {
  //   return this.customers;
  // }

  constructor(private FS: Firestore) {}

  // add(customer: Customer) {
  //   customer._id =
  //     String(this.customers.length + 1) + new Date() + Math.random();

  //   customer.createdAt = new Date();
  //   this.customers.push(customer);
  //   return;
  // }
  add(customer: Customer, cb: Function) {
    customer.createdAt = new Date();
    customer.createdAt = serverTimestamp();

    // console.log(customer);

    addDoc(this.collectionRef, customer)
      .then(() => cb())
      .catch((error) => console.log(error));
  }

  async getCustomer(id: string, cb: Function) {
    try {
      const docRef = doc(this.FS, 'customers', id);
      const result = await getDoc(docRef);
      const customer = { ...result.data(), _id: result.id };
      cb(customer);
    } catch (error) {
      console.log(error);
    }
  }

  // getCustomer(id: string, cb: Function): Customer | void {
  //   const customer = this.customers.find(
  //     (customerFromDb: Customer) => customerFromDb._id === id
  //   );
  //   return cb(customer);
  // }

  delete(id: string) {
    const docRef = doc(this.FS, 'customers', id);
    deleteDoc(docRef).catch((error) => console.log(error));
  }

  // delete(id: string) {
  //   let customerIndex = this.customers.findIndex(
  //     (customer: Customer) => customer._id === id
  //   );
  //   if (customerIndex === -1) return;
  //   this.customers.splice(customerIndex, 1);
  // }

  edit(customer: Customer, id: string, cb: Function) {
    const docRef = doc(this.FS, 'customers', id);
    updateDoc(docRef, { ...customer })
      .then(() => cb())
      .catch((error) => console.log(error));
  }

  // edit(customer: Customer) {
  //   let index = this.customers.findIndex(
  //     (customerFromDb) => customerFromDb._id === customer._id
  //   );
  //   if (index === -1) return;
  //   this.customers[index] = customer;
  // }
}
