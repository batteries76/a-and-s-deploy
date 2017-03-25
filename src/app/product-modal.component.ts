import { Component, Input, OnInit, Output, OnChanges, ChangeDetectionStrategy, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { ModalService }           from './modal.service';

import { Product }                  from './product';

@Component({
  selector: 'my-product-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-modal.component.html',
  styleUrls: [ './dashboard.component.css' ],
  animations: [
    trigger('dialog', [
    transition('void => *', [
      style({ transform: 'scale3d(.3, .3, .3)' }),
      animate(100)
      ]),
    transition('* => void', [
      animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ProductModalComponent implements OnChanges {

  closable = true;
  @Input() isVisible: boolean;
  @Input() currentProduct: Product;
//  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private modalService: ModalService) { }

  ngOnInit() { }

  ngOnChanges() {
		console.log('Change detected');
    console.log(this.isVisible);
    console.log(this.currentProduct);
	}

  // close() {
  //   this.visible = false;
  //   this.visibleChange.emit(this.visible);
  // }

  modalShut() {
    console.log("modalShut!!")
    this.modalService.closeModal();
  }
}
