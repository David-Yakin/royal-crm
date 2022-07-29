import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsPageComponent } from '../pages/Contacts/contacts-page/contacts-page.component';
import { CustomersPageComponent } from '../pages/Customers/customers-page/customers-page.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';

const routes: Routes = [
  { path: 'customers', component: CustomersPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
