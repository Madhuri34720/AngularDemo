
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {RatingComponent} from './rating/rating-component'
import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router'; 
import { ProductDetailsComponent } from './products/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
@NgModule({
    imports:      [ BrowserModule,FormsModule ,HttpClientModule, 
      RouterModule.forRoot([
        { path: 'products', component: ProductListComponent},
        { path: 'products/:id', component: ProductDetailsComponent},
        { path: 'welcome', component: WelcomeComponent},
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ],{useHash:true})
       ],
    declarations: [AppComponent,ProductListComponent,RatingComponent,ProductDetailsComponent,WelcomeComponent],
    bootstrap:    [ AppComponent],
    providers:[ProductService]
  })


export class AppModule { 

}