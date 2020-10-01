import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Api } from './services/api';

import { Layout1Component } from '../app/components/layout1/layout1.component';
import { Layout2Component } from './components/layout2/layout2.component';
import { Layout3Component } from './components/layout3/layout3.component';



@NgModule({
  declarations: [
    AppComponent,
    Layout1Component,
    Layout2Component,
    Layout3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpClient,Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
