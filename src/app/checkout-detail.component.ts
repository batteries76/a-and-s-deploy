import { Component, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'my-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class CheckoutDetailComponent {

  @Input() product: Product;

}
