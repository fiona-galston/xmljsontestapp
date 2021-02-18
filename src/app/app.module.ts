import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsoptionComponent } from './jsoption/jsoption.component';
import { XmloptionComponent } from './xmloption/xmloption.component';

@NgModule({
  declarations: [
    AppComponent,
    JsoptionComponent,
    XmloptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
