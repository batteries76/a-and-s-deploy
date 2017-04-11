import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';
import { ModalService } from './modal.service';


@Component({
  selector: 'my-checkout',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './checkout.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class CheckoutComponent implements OnChanges {

  @Input() filteredProducts: Product[] = [];
  @Input() totalCost: number;
  totalTshirts: number;

  getTotalTshirts(){
    this.totalTshirts = 0;
    this.filteredProducts.forEach(product => {
      this.totalTshirts += product.numberOrderedTotal;
    });
  }

  constructor(private productService: ProductService) {
    this.productService.filteredProductSubject.subscribe(products => {
      console.log("CHECKOUT products changed");
      this.filteredProducts = products;
      console.log(this.filteredProducts);
    });
    this.productService.totalCostSubject.subscribe(cost => {
      console.log("TOTAL COST changed");
      this.totalCost = cost;
      console.log(this.totalCost);
    });
  }

  ngOnChanges() {
    console.log("CHECKOUT Changes");
  }

  openCheckout(amount) {
    this.getTotalTshirts();
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Axe and Sirens',
      description: 'Ready to pay for ' + this.totalTshirts + ' t-shirts?',
      amount: amount*100
    });

  }

}
