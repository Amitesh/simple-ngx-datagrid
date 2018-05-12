import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdlNgxModule } from 'adl-ngx';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdlNgxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
