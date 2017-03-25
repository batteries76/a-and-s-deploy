import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductService }           from './product.service';

import { Product }                  from './product';

@Component({
  selector: 'my-cart-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart-counter.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class CartCounterComponent implements OnChanges {

  @Input() cartTotal: number = 0;

  ngOnChanges() {
    console.log('Change DETECTED');
  }

}
