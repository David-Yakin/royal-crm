import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsPageComponent } from '../pages/Contacts/contacts-page/contacts-page.component';
import { CustomerDetailsComponent } from '../pages/Customers/customer-details/customer-details.component';
import { CustomersPageComponent } from '../pages/Customers/customers-page/customers-page.component';
import { EditCustomerComponent } from '../pages/Customers/edit-customer/edit-customer.component';
import { NewCustomerComponent } from '../pages/Customers/new-customer/new-customer.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'customers', component: CustomersPageComponent },
  { path: 'customers/new-customer', component: NewCustomerComponent },
  {
    path: 'customers/customer-details/:id',
    component: CustomerDetailsComponent,
  },
  { path: 'customers/edit-customer/:id', component: EditCustomerComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
