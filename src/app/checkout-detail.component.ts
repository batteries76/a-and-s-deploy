import { Component, Input } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'my-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class CheckoutDetailComponent {

  @Input() product: Product;

  constructor(private productService: ProductService){ }

  deleteOrderedElement(product){
    console.log("In the DELETE ORDERED ELEMENT function");
    this.productService.deleteProduct(product);
    this.productService.getTotalCost();
  }

}
