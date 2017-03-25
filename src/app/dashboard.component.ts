import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { Router }            from '@angular/router';

import { Product }           from './product';
import { ProductService }    from './product.service';
import { ModalService }      from './modal.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
//  directives: ChangeDetectionStrategy.Default
})
export class DashboardComponent implements OnChanges {

  products: Product[];

  constructor(private router: Router, private productService: ProductService, private modalService: ModalService) {
    console.log("DASHBOARD CONSTRUCTOR");
    this.productService.productSourceSubject.subscribe(products => {
      console.log("DASHBOARD products changed");
      this.products = products;
    });
  }

  ngOnInit(): void {
    this.productService.upDateSubject()
    console.log("DASHBOARD ONINIT");
    this.productService.productSourceSubject.subscribe(products => {
      console.log("DASHBOARD products changed");
      this.products = products;
    });
  }

  ngOnChanges(){
    console.log("DAMN DASHBOARD CHANGED")
  }

  popIt(product: Product): void {
    console.log("DASHBOARD: popIt");
    this.modalService.setCurrentModal(product);
  }

  printSomething(name: string, showDialog: boolean, product: Product): void {
    console.log('clicked on this one in DASHBOARD!');
    console.log(name);
    console.log(showDialog);
    console.log(product);
  }

}
