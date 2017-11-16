import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5NHYVnbq_2z9VaQSgUA-jvh1-qUNeSv0'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
