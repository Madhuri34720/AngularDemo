
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {RatingComponent} from './rating/rating-component'

@NgModule({
    imports:      [ BrowserModule,FormsModule  ],
    declarations: [AppComponent,ProductListComponent,RatingComponent ],
    bootstrap:    [  AppComponent,ProductListComponent]
  })


export class AppModule { 

}