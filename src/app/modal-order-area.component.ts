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

  small: AbstractControl;
  medium: AbstractControl;
  large: AbstractControl;

  ngOnInit() {  }

  setCheckoutProducts(){
    this.productService.getCheckoutProducts();
  }

  constructor(fb: FormBuilder, private productService: ProductService, private modalService: ModalService) {
    this.myOrderFormGroup = fb.group({
      'small': ['0'],
      'medium': ['0'],
      'large': ['0']
    });

    this.small = this.myOrderFormGroup.controls['small'];
    this.medium = this.myOrderFormGroup.controls['medium'];
    this.large = this.myOrderFormGroup.controls['large'];
  }

  onAddToCart(myOrder: any, productID: number): void {
    console.log('You submitted order = ', myOrder);
    console.log('You submitted myOrder.value = ', myOrder.value);
    console.log('You submitted myOrder.value.small = ', myOrder.value.small);

    console.log("in onAddToCart");
    console.log(productID);
    this.productService.updateProduct(productID, myOrder);
    this.productService.getCartTotal();
  }

  modalShut() {
    console.log("modalShut!!")
    this.modalService.closeModal();
  }

}
