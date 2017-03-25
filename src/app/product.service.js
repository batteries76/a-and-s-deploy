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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var Subject_1 = require('rxjs/Subject');
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.productsUrl = 'app/products';
        this.productSource = [];
        this.productSourceSubject = new Subject_1.Subject();
        // productSubject: = new Subject<Product[]>();
        this.cartNumber = new Subject_1.Subject();
        this.cartCounter = 0;
        this.index = -1;
        this.checkoutProducts = [];
        this.filteredProducts = [];
        this.filteredProductSubject = new Subject_1.Subject();
    }
    ProductService.prototype.getCheckoutProducts = function () {
        this.filteredProducts = [];
        console.log("GET CHECKOUT PRODUCTS");
        this.checkoutProducts = this.getProducts();
        for (var _i = 0, _a = this.productSource; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.numberOrderedTotal > 0) {
                this.filteredProducts.push(product);
            }
        }
        this.filteredProductSubject.next(this.filteredProducts);
    };
    ProductService.prototype.getHttpProducts = function () {
        return this.http.get(this.productsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ProductService.prototype.initialiseProducts = function (products) {
        console.log("product service INITIALISE products");
        this.productSource = products;
        this.productSourceSubject.next(products);
    };
    ProductService.prototype.getProducts = function () {
        return this.productSource;
    };
    ProductService.prototype.updateProduct = function (productID, myOrder) {
        var _this = this;
        console.log("in UPDATE PRODUCT");
        console.log(this.productSource);
        console.log(productID);
        this.productSource.forEach(function (product, index) {
            if (product.id === productID) {
                _this.index = index;
                console.log("Index FOUND! - " + index);
                console.log(product);
                console.log(_this.index);
            }
        });
        this.productSource[this.index].numberOrderedSmall += +myOrder.value.small;
        this.productSource[this.index].numberOrderedMedium += +myOrder.value.medium;
        this.productSource[this.index].numberOrderedLarge += +myOrder.value.large;
        this.productSource[this.index].numberOrderedTotal = this.productSource[this.index].numberOrderedSmall + this.productSource[this.index].numberOrderedMedium + this.productSource[this.index].numberOrderedLarge;
    };
    ProductService.prototype.upDateSubject = function () {
        this.productSourceSubject.next(this.productSource);
    };
    ProductService.prototype.getCartTotal = function () {
        this.cartCounter = 0;
        console.log("in CART TOTAL");
        console.log(this.productSource);
        console.log(this.productSource.length);
        for (var _i = 0, _a = this.productSource; _i < _a.length; _i++) {
            var product = _a[_i];
            console.log("GET CART TOTAL -- LOOP");
            this.cartCounter += product.numberOrderedTotal;
        }
        this.cartNumber.next(this.cartCounter);
        console.log("this.cartCounter");
        console.log(this.cartCounter);
    };
    ProductService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map