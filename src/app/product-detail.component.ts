import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { ProductService }           from './product.service';

import { Product }                  from './product';

@Component({
  selector: 'my-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: [ './product-detail.component.css' ]
})
export class ProductDetailComponent implements OnInit {

  product: any;
  
  ngOnInit(){}
  // @Input()
  // product: Product;
  //
  // constructor(
  // private productService: ProductService,
  // private route: ActivatedRoute
  // ) { }
  //
  // ngOnInit(): void {
  //   this.route.params.forEach((params: Params) => {
  //   let id = +params['id'];
  //   this.productService.getProduct(id)
  //     .then(product => this.product = product);
  //   });
  // }
  //
  // goBack(): void {
  //   window.history.back();
  // }

}
