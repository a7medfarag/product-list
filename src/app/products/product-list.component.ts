import { Component, OnInit } from "@angular/core";
import { IProduct } from "./products";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle = "Products List";
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    private _listFilter: string = '';
    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      console.log('Sitter Value ' + this._listFilter);
      this.filteredProducts = this.performFilter(value);
    }
    filteredProducts:IProduct[] = [];
    products: IProduct[] = [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2021",
          "price": 19.95,
          "description": "Leaf rake with 48-inch wooden handle.",
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2021",
          "price": 32.99,
          "description": "15 gallon capacity rolling garden cart",
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        },
        {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2021",
          "price": 8.9,
          "description": "Curved claw steel hammer",
          "starRating": 4.8,
          "imageUrl": "assets/images/hammer.png"
        },
        {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2021",
          "price": 11.55,
          "description": "15-inch steel blade hand saw",
          "starRating": 3.7,
          "imageUrl": "assets/images/saw.png"
        },
        {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2020",
          "price": 35.95,
          "description": "Standard two-button video game controller",
          "starRating": 4.6,
          "imageUrl": "assets/images/xbox-controller.png"
        }
      ]

      toggleImage(){
        this.showImage = !this.showImage;
      }
      performFilter(filterBy: string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().includes(filterBy));
      }
      ngOnInit(): void {
        this.listFilter = 'cart'
      }
      onRatingClicked(message: string):void{
        this.pageTitle = "Products List " + message;
      }
}