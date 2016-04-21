import { Component } from 'angular2/core';

import { ProductService } from './products/product.service';
import { ProductListComponent } from './products/product-list.component';

@Component({
  selector: 'pm-app',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `,
  directives: [ProductListComponent],
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}