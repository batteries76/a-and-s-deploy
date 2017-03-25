"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var modal_service_1 = require('./modal.service');
var product_1 = require('./product');
var ProductModalComponent = (function () {
    //  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    function ProductModalComponent(modalService) {
        this.modalService = modalService;
        this.closable = true;
    }
    ProductModalComponent.prototype.ngOnInit = function () { };
    ProductModalComponent.prototype.ngOnChanges = function () {
        console.log('Change detected');
        console.log(this.isVisible);
        console.log(this.currentProduct);
    };
    // close() {
    //   this.visible = false;
    //   this.visibleChange.emit(this.visible);
    // }
    ProductModalComponent.prototype.modalShut = function () {
        console.log("modalShut!!");
        this.modalService.closeModal();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ProductModalComponent.prototype, "isVisible", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_1.Product)
    ], ProductModalComponent.prototype, "currentProduct", void 0);
    ProductModalComponent = __decorate([
        core_1.Component({
            selector: 'my-product-modal',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: 'app/product-modal.component.html',
            styleUrls: ['app/dashboard.component.css'],
            animations: [
                core_1.trigger('dialog', [
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'scale3d(.3, .3, .3)' }),
                        core_1.animate(100)
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate(100, core_1.style({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [modal_service_1.ModalService])
    ], ProductModalComponent);
    return ProductModalComponent;
}());
exports.ProductModalComponent = ProductModalComponent;
//# sourceMappingURL=product-modal.component.js.map