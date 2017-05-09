import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { ModalService } from './modal.service';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from './product';
// modal code
import { ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger('slideInOut', [
    state('in', style({
      transform: 'translate3d(0, 0, 0)'
    })),
    state('out', style({
      transform: 'translate3d(-500px, 0, 0)'
    })),
    transition('in => out', animate('400ms ease-in-out')),
    transition('out => in', animate('400ms ease-in-out'))
  ]),
]
})
export class AppComponent {

  title = 'Axe and Sirens';

  initModal: boolean;
  showDialog: boolean;
  currentProductInModal: Product;
  cartTotal: number = 0;
  appProducts: Product[];

  menuState: string = 'out';

  setCheckoutProducts(){
    this.productService.getCheckoutProducts();
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  constructor(private modalService: ModalService, private productService: ProductService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {

    overlay.defaultViewContainer = vcRef;

    this.productService.getTotalCost();

    this.productService.getHttpProducts()
      .then(products => {
        console.log("APP CONSTRUCTOR");
        this.appProducts = products;
        this.productService.initialiseProducts(products);
    });

    this.productService.cartNumber.subscribe((total) => {
      this.cartTotal = total;
      console.log("TOTAL is: " + total);
      console.log("this.cartTotal is: " + this.cartTotal);
    });

    this.showDialog = false;

    modalService.modalShowing.subscribe((value) => {
      this.showDialog = value;
      console.log("value is: " + value);
      console.log("this.showDialog = " + this.showDialog);
    });

    modalService.currentProductModal.subscribe((product) => {
      this.currentProductInModal = product;
      console.log(product);
      console.log("this.currentProductInModal = " + this.currentProductInModal);
    });

    this.initModal = false;

    modalService.modalInit.subscribe((bool) => {
      this.initModal = bool;
      console.log("bool is: " + bool);
      console.log("this.initModal = " + this.initModal);
    });
  }

}
