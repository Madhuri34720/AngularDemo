import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';



@Component({
    selector: 'product-list',
    templateUrl: './app/products/product-list.component.html'
})

export class ProductListComponent  {
    pageTitle : string ="Product List";
    showImage : boolean =false;
    imageWidth: number =50;
    imageMargin :number=20;
    _listFilter :string="Search";
    filterProduct :IProduct[];   
   
  
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
        this.filterProduct=this.performFilter(this._listFilter);
     }

    performFilter(filterBy: string): IProduct[] {
        console.log('here');
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }	
    constructor(private _productservice : ProductService){
       this.filterProduct=this.products;    
      
       //this.filterProduct=this.performFilter(this._listFilter);
    }
    products:  IProduct[]=this._productservice.getProducts();
   
}