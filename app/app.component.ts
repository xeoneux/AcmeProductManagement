import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';
import 'rxjs/Rx';

import { ProductService } from './products/product.service';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';

@Component({
  selector: 'pm-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/products', name: 'Products', component: ProductListComponent, useAsDefault: true },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent }
])
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}