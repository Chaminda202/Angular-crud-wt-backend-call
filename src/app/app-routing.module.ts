import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewInvoiceComponent} from './new-invoice/new-invoice.component';
import {CreateActionComponent} from './create-action/create-action.component';
import {UpdateActionComponent} from './update-action/update-action.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/AuthGuard';

const routes: Routes = [
  { path: '', redirectTo: 'action', pathMatch: 'full'},
  { path: 'action', component: NewInvoiceComponent, canActivate: [AuthGuard]},
  { path: 'create', component: CreateActionComponent },
  { path: 'edit/:id', component: UpdateActionComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
