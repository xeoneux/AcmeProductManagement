import { Component, OnInit } from 'angular2/core';

import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star.component';

@Component({
  selector: 'pm-products',
  templateUrl: 'app/products/product-list.component.html',
  styleUrls: ['app/products/product-list.component.css'],
  pipes: [ProductFilterPipe],
  directives: [StarComponent]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: IProduct[];

  constructor(private _productService: ProductService) {

  }

  ngOnInit() {
    this.products = this._productService.getProducts();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}