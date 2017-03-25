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
var forms_1 = require('@angular/forms');
var product_service_1 = require('./product.service');
var product_1 = require('./product');
var ModalOrderAreaComponent = (function () {
    function ModalOrderAreaComponent(fb, productService) {
        this.productService = productService;
        this.myOrderFormGroup = fb.group({
            'small': ['0'],
            'medium': ['0'],
            'large': ['0']
        });
        this.small = this.myOrderFormGroup.controls['small'];
        this.medium = this.myOrderFormGroup.controls['medium'];
        this.large = this.myOrderFormGroup.controls['large'];
    }
    ModalOrderAreaComponent.prototype.ngOnInit = function () { };
    ModalOrderAreaComponent.prototype.setCheckoutProducts = function () {
        this.productService.getCheckoutProducts();
    };
    ModalOrderAreaComponent.prototype.onAddToCart = function (myOrder, productID) {
        console.log('You submitted order = ', myOrder);
        console.log('You submitted myOrder.value = ', myOrder.value);
        console.log('You submitted myOrder.value.small = ', myOrder.value.small);
        console.log("in onAddToCart");
        console.log(productID);
        this.productService.updateProduct(productID, myOrder);
        this.productService.getCartTotal();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_1.Product)
    ], ModalOrderAreaComponent.prototype, "modalProduct", void 0);
    ModalOrderAreaComponent = __decorate([
        core_1.Component({
            selector: 'my-modal-order-area',
            templateUrl: 'app/modal-order-area.component.html',
            styleUrls: ['app/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, product_service_1.ProductService])
    ], ModalOrderAreaComponent);
    return ModalOrderAreaComponent;
}());
exports.ModalOrderAreaComponent = ModalOrderAreaComponent;
//# sourceMappingURL=modal-order-area.component.js.map