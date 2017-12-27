
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {RatingComponent} from './rating/rating-component'
import { ProductService } from './products/product.service';

@NgModule({
    imports:      [ BrowserModule,FormsModule  ],
    declarations: [AppComponent,ProductListComponent,RatingComponent ],
    bootstrap:    [  AppComponent,ProductListComponent],
    providers:[ProductService]
  })


export class AppModule { 

}