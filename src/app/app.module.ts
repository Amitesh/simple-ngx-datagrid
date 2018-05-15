import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { AdlNgxModule } from 'adl-ngx';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdlNgxModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
