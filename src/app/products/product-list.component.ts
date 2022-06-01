import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
// import { ProductService } from "./product.service";
import { IProduct } from "./products";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    // providers: [ProductService] hena 34an law 3ayez am3el inject lelservice badal ma aktebha henak fe elservice nafsha ya3ney
})

export class ProductListComponent implements OnInit{
    pageTitle = "Products List";
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;


    constructor(private _poductSerive: ProductService){}


    private _listFilter: string = '';

    filteredProducts:IProduct[] = [];

    products: IProduct[] = [];


    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      console.log('Sitter Value ' + this._listFilter);
      this.filteredProducts = this.performFilter(value);
    }
      toggleImage(){
        this.showImage = !this.showImage;
      }
      performFilter(filterBy: string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().includes(filterBy));
      }
      ngOnInit(): void {
        // To start the life cycle hook with intializing the array values from the service
        this.products = this._poductSerive.getPoducts();
        this.filteredProducts = this.products;
      }
      onRatingClicked(message: string):void{
        this.pageTitle = "Products List " + message;
      }
}