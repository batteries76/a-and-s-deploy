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
var product_service_1 = require('./product.service');
var AppComponent = (function () {
    function AppComponent(modalService, productService) {
        var _this = this;
        this.modalService = modalService;
        this.productService = productService;
        this.title = 'Axe and Sirens';
        this.cartTotal = 0;
        this.productService.getHttpProducts()
            .then(function (products) {
            console.log("APP CONSTRUCTOR");
            _this.appProducts = products;
            _this.productService.initialiseProducts(products);
        });
        this.productService.cartNumber.subscribe(function (total) {
            _this.cartTotal = total;
            console.log("TOTAL is: " + total);
            console.log("this.cartTotal is: " + _this.cartTotal);
        });
        this.showDialog = false;
        modalService.modalShowing.subscribe(function (value) {
            _this.showDialog = value;
            console.log("value is: " + value);
            console.log("this.showDialog = " + _this.showDialog);
        });
        modalService.currentProductModal.subscribe(function (product) {
            _this.currentProductInModal = product;
            console.log(product);
            console.log("this.currentProductInModal = " + _this.currentProductInModal);
        });
        this.initModal = false;
        modalService.modalInit.subscribe(function (bool) {
            _this.initModal = bool;
            console.log("bool is: " + bool);
            console.log("this.initModal = " + _this.initModal);
        });
    }
    AppComponent.prototype.setCheckoutProducts = function () {
        this.productService.getCheckoutProducts();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [modal_service_1.ModalService, product_service_1.ProductService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map