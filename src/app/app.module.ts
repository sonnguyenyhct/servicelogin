import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { AppRoutingModule } from './app-routing.module';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { LoginStep1Component } from './login-step1/login-step1.component';
import { LoginStep2Component } from './login-step2/login-step2.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    LoginStep1Component,
    LoginStep2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
