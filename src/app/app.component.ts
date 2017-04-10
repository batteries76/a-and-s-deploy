import { Component } from '@angular/core';
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
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Axe and Sirens';

  initModal: boolean;
  showDialog: boolean;
  currentProductInModal: Product;
  cartTotal: number = 0;
  appProducts: Product[];

// modal option?
  // onClick() {
  // this.modal.alert()
  //     .size('lg')
  //     .showClose(true)
  //     .title('A simple Alert style modal window')
  //     .body(`
  //         <h5>Alert is a classic (title/body/footer) 1 button modal window that
  //         does not block.</h5>
  //         <b>Configuration:</b>
  //         <ul>
  //             <li>Non blocking (click anywhere outside to dismiss)</li>
  //             <li>Size large</li>
  //             <li>Dismissed with default keyboard key (ESC)</li>
  //             <li>Close wth button click</li>
  //             <li>HTML content</li>
  //         </ul>`)
  //     .open();
  // }

  setCheckoutProducts(){
    this.productService.getCheckoutProducts();
  }

  constructor(private modalService: ModalService, private productService: ProductService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {

    overlay.defaultViewContainer = vcRef;

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
