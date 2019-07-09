import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { PictureShowComponent } from './picture-show/picture-show.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderInterceptor} from './intercepter/HeaderInterceptor';
import { CreateActionComponent } from './create-action/create-action.component';
import { UpdateActionComponent } from './update-action/update-action.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import {AuthenticationService} from './services/authentication.service';
import {FakeBackendInterceptor} from './intercepter/UserFakeBackendInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    NewInvoiceComponent,
    PictureShowComponent,
    CreateActionComponent,
    UpdateActionComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    },
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
