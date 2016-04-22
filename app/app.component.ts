import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, RouteConfig } from 'angular2/router';
import 'rxjs/Rx';

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
  providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/products', name: 'Products', component: ProductListComponent, useAsDefault: true }
])
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}