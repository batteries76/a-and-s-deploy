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
var router_1 = require('@angular/router');
var product_service_1 = require('./product.service');
var modal_service_1 = require('./modal.service');
var DashboardComponent = (function () {
    function DashboardComponent(router, productService, modalService) {
        var _this = this;
        this.router = router;
        this.productService = productService;
        this.modalService = modalService;
        console.log("DASHBOARD CONSTRUCTOR");
        this.productService.productSourceSubject.subscribe(function (products) {
            console.log("DASHBOARD products changed");
            _this.products = products;
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.upDateSubject();
        console.log("DASHBOARD ONINIT");
        this.productService.productSourceSubject.subscribe(function (products) {
            console.log("DASHBOARD products changed");
            _this.products = products;
        });
    };
    DashboardComponent.prototype.ngOnChanges = function () {
        console.log("DAMN DASHBOARD CHANGED");
    };
    DashboardComponent.prototype.popIt = function (product) {
        console.log("DASHBOARD: popIt");
        this.modalService.setCurrentModal(product);
    };
    DashboardComponent.prototype.printSomething = function (name, showDialog, product) {
        console.log('clicked on this one in DASHBOARD!');
        console.log(name);
        console.log(showDialog);
        console.log(product);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard.component.html',
            styleUrls: ['app/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService, modal_service_1.ModalService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map