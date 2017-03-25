import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'my-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: [ './styles.css' ]
})
export class ProductDisplayComponent {

  @Input() product: Product;

  ngOnInit(product: Product){
    product = product;
  }

}
