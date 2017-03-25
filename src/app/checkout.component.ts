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
  totalCost: number;

  constructor(private productService: ProductService) {
    this.productService.filteredProductSubject.subscribe(products => {
      console.log("CHECKOUT products changed");
      this.filteredProducts = products;
      console.log(this.filteredProducts);
      this.totalCost = 0;
      for (let product of this.filteredProducts){
        this.totalCost += product.numberOrderedTotal*product.price;
      }
    });
  }

  ngOnChanges() {
    console.log("CHECKOUT Changes");
  }

}
