import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactsPageComponent } from '../pages/Contacts/contacts-page/contacts-page.component';
import { CustomerDetailsComponent } from '../pages/Customers/customer-details/customer-details.component';
import { CustomersPageComponent } from '../pages/Customers/customers-page/customers-page.component';
import { EditCustomerComponent } from '../pages/Customers/edit-customer/edit-customer.component';
import { NewCustomerComponent } from '../pages/Customers/new-customer/new-customer.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { LoginPageComponent } from '../pages/Users/login-page/login-page.component';
import { SignupPageComponent } from '../pages/Users/signup-page/signup-page.component';
import { AuthGuard } from './auth.guard';
import { LoggedGuard } from './logged.guard';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/new-customer',
    component: NewCustomerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/customer-details/:id',
    component: CustomerDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/edit-customer/:id',
    component: EditCustomerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    canActivate: [AuthGuard],
  },
  { path: '', component: LoginPageComponent, canActivate: [LoggedGuard] },
  {
    path: 'signup',
    component: SignupPageComponent,
    canActivate: [LoggedGuard],
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
