import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './products';
//  we'll use the component as a directive
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  // enscapulating component styles
  styleUrls: ['./product-list-component.css']
})
// implement OnInit lifecycle hook
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Interpolation';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  // getter and setter
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }


  filteredProducts: IProduct[] = []
  
  // pass products to html template
  // use as an interface
  products: IProduct[] = [ ];


// define the dependecy and inject the service
constructor(private productService: ProductService) {}


  //  filter products
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
product.productName.toLocaleLowerCase().includes(filterBy))
  }

  // toggle image method
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // hook method for OnInit interface. Perform any component initialization eg retrieve data for the template
  ngOnInit(): void {
    // set products property to the products returned from the productService
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    // this._listFilter = 'cart';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
