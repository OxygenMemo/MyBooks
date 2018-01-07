import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksServiceService } from './books-service.service';

import { HttpClientModule } from '@angular/common/http';
import { ListbookComponent } from './listbook/listbook.component';


@NgModule({
  declarations: [
    AppComponent,
    ListbookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BooksServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
