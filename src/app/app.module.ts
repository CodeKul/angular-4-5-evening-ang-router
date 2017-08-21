import { MyRoutingModule } from './app.router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    ForgetPassComponent
  ],
  imports: [
    BrowserModule,
    MyRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
