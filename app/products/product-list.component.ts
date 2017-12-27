import { Component } from '@angular/core';
import { IProduct } from './product';



@Component({
    selector: 'product-list',
    templateUrl: './app/products/product-list.component.html'
})

export class ProductListComponent  {
    pageTitle : string ="Product List";
    showImage : boolean =false;
    imageWidth: number =50;
    imageMargin :number=20;
    _listFilter :string="cart";
    filterProduct :string;   
    products:  IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        }];
  
     toggleImage() : void{
        this.showImage=!this.showImage;
     }
     get listFilter(): string{
        return this._listFilter;
     }
     set listFilter(value: string)
     {
         this._listFilter=value;
        console.log(this._listFilter);
        this.performFilter(this._listFilter);
     }

    performFilter(filterBy: string): IProduct[] {
        console.log('here');
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }	

   
}