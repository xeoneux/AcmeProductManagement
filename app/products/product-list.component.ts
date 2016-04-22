import { Component, OnInit } from 'angular2/core';

import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star.component';

@Component({
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
  listFilter: string;
  errorMessage: string;

  products: IProduct[];

  constructor(private _productService: ProductService) {

  }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(
        products => this.products = products,
        error => this.errorMessage = error
      );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}