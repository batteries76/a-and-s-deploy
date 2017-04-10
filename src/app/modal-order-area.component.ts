import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ProductService } from './product.service';
import { ModalService } from './modal.service'

import { Product } from './product';

@Component({
  selector: 'my-modal-order-area',
  templateUrl: './modal-order-area.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class ModalOrderAreaComponent implements OnInit {

  myOrderFormGroup: FormGroup;

  @Input() modalProduct: Product;

  public sizes = [
      { value: 'small', display: 'S' },
      { value: 'medium', display: 'M' },
      { value: 'large', display: 'L' }
  ];

  orderNumber: AbstractControl;
  orderSize: AbstractControl;

  ngOnInit() {  }

  setCheckoutProducts(){
    this.productService.getCheckoutProducts();
  }

  constructor(fb: FormBuilder, private productService: ProductService, private modalService: ModalService) {
    this.myOrderFormGroup = fb.group({
      'orderNumber': ['0'],
      'orderSize': ['S'],
    });

    this.orderNumber = this.myOrderFormGroup.controls['orderNumber'];
    this.orderSize = this.myOrderFormGroup.controls['orderSize'];
  }

  onAddToCart(myOrder: any, productID: number): void {
    console.log('You submitted order = ', myOrder);
    console.log('You submitted myOrder.value = ', myOrder.value);

    console.log("in onAddToCart");
    console.log(productID);
    this.productService.updateProduct(productID, myOrder);
    this.productService.getCartTotal();
    this.modalShut();
  }

  modalShut() {
    console.log("modalShut!!")
    this.modalService.closeModal();
  }

}
