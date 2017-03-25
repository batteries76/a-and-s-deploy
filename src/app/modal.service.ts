import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from './product';

@Injectable()
export class ModalService {

  currentProductModal = new Subject<Product>();
  modalShowing = new Subject<boolean>();
  modalInit = new Subject<boolean>();

  setCurrentModal(product: Product): void {

    console.log('setCurrentModal!!!');

    this.currentProductModal.next(product);
    this.modalShowing.next(true);
    this.modalInit.next(true);

    console.log(this.modalShowing);
    console.log(product);
//    console.log(this.currentProductModal);
  }

  closeModal(){

    console.log('closeModal!!!');

    this.modalShowing.next(false);
//    this.modalInit.next(true);

    console.log(this.modalShowing);
  }

}
