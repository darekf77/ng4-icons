import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng4IconsModule } from 'components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng4IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
