import { Component ,OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { error } from 'util';


@Component({
  
    templateUrl: './app/products/product-list.component.html'
})

export class ProductListComponent implements OnInit   {
    pageTitle : string ="Product List";
    showImage : boolean =false;
    imageWidth: number =50;
    imageMargin :number=20;
    _listFilter :string="Search";
    filterProduct :IProduct[]; 
    products: IProduct[];
    observableProducts: Observable<IProduct[]>  
    errorMessage: String;
    constructor(private _productservice : ProductService){
        console.log(this._productservice.getProducts());
    }
          
    ngOnInit(): void {
         this._productservice.getProducts().subscribe(
            
            products =>{ this.products = products
                this.filterProduct=this.products;
            },
            error => this.errorMessage =<any>error             
         );
         console.log(this.products+"product");
         
	   
                   
   }
  
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
        console.log(this.products);
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }	
 
      
       //this.filterProduct=this.performFilter(this._listFilter);
   
   // products:  IProduct[]=this._productservice.getProducts();
   
}