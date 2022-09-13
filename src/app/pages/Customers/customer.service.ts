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
  collectionRef: CollectionReference<DocumentData> = collection(
    this.FS,
    'customers'
  );

  constructor(private FS: Firestore) {}

  getAll(cb: Function) {
    let customers: any = [];
    onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((customer) => {
        customers.push({
          ...customer.data(),
          _id: customer.id,
        });
      });
    });
    return cb(customers);
  }

  add(customer: Customer, cb: Function) {
    customer.createdAt = new Date();
    customer.createdAt = serverTimestamp();

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

  delete(id: string) {
    const docRef = doc(this.FS, 'customers', id);
    deleteDoc(docRef).catch((error) => console.log(error));
  }

  edit(customer: Customer, id: string, cb: Function) {
    const docRef = doc(this.FS, 'customers', id);
    updateDoc(docRef, { ...customer })
      .then(() => cb())
      .catch((error) => console.log(error));
  }
}

// getAll(): Customer[] {
//   return this.customers;
// }

// getCustomer(id: string, cb: Function): Customer | void {
//   const customer = this.customers.find(
//     (customerFromDb: Customer) => customerFromDb._id === id
//   );
//   return cb(customer);
// }

// add(customer: Customer) {
//   customer._id =
//     String(this.customers.length + 1) + new Date() + Math.random();

//   customer.createdAt = new Date();
//   this.customers.push(customer);
//   return;
// }

// edit(customer: Customer) {
//   let index = this.customers.findIndex(
//     (customerFromDb) => customerFromDb._id === customer._id
//   );
//   if (index === -1) return;
//   this.customers[index] = customer;
// }

// delete(id: string) {
//   let customerIndex = this.customers.findIndex(
//     (customer: Customer) => customer._id === id
//   );
//   if (customerIndex === -1) return;
//   this.customers.splice(customerIndex, 1);
// }
