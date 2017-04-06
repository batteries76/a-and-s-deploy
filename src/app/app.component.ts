import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from './product';

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

  setCheckoutProducts(){
    this.productService.getCheckoutProducts();
  }

  constructor(private modalService: ModalService, private productService: ProductService) {

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
