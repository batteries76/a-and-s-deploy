import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import { Product }       from './product';

@Injectable()
export class ProductService {

  private productsUrl = 'app/products';

  productSource: Product[] = [];
  productSourceSubject = new Subject<Product[]>();
  // productSubject: = new Subject<Product[]>();

  cartNumber = new Subject<number>();
  cartCounter: number = 0;

  totalCostSubject = new Subject<number>();
  totalCost = 0;

  index: number = -1;

  checkoutProducts: Product[] = [];
  filteredProducts: Product[] = [];
  filteredProductSubject = new Subject<Product[]>();

  getTotalCost(){
    this.totalCost = 0;
    for (let product of this.filteredProducts){
      this.totalCost += product.numberOrderedTotal*product.price;
    }
    this.totalCostSubject.next(this.totalCost);
  }

  getCheckoutProducts() {
    this.filteredProducts = [];
    console.log("GET CHECKOUT PRODUCTS");
    this.checkoutProducts = this.getProducts();
    for (let product of this.productSource){
      if(product.numberOrderedTotal>0){
        this.filteredProducts.push(product);
      }
    }
    this.filteredProductSubject.next(this.filteredProducts);
    this.getTotalCost();
  }

  constructor(private http: Http) {
  }

  deleteProduct(product: Product){
    console.log("In the DELETE PRODUCT function")
    var id = product.id;

    this.productSource.forEach((product, index) => {
      if(product.id === id){
        this.index = index;
        console.log("Index FOUND! = " + index);
        console.log(product);
        console.log(this.index);
      }
    });
    this.productSource[this.index].numberOrderedSmall = 0;
    this.productSource[this.index].numberOrderedMedium = 0;
    this.productSource[this.index].numberOrderedLarge = 0;
    this.productSource[this.index].numberOrderedTotal = 0;

    this.getCartTotal();
  }

  getHttpProducts() {
    return this.http.get(this.productsUrl)
               .toPromise()
               .then(response => response.json().data as Product[])
               .catch(this.handleError);
  }

  initialiseProducts(products: Product[]) {
    console.log("product service INITIALISE products");
    this.productSource = products;
    this.productSourceSubject.next(products);
  }

  getProducts(): Product[] {
    return this.productSource;
  }

  updateProduct(productID: number, myOrder: any) {
    console.log("in UPDATE PRODUCT");
    console.log(this.productSource);
    console.log(productID);
    console.log("MyOrder is: ")
    console.log(myOrder.value)

    this.productSource.forEach((product, index) => {
      if(product.id === productID){
        this.index = index;
        console.log("Index FOUND! = " + index);
        console.log(product);
        console.log(this.index);
      }
    });

    if (myOrder.value.orderSize === 'small') {
      console.log("hit ORDER SMALL");
      this.productSource[this.index].numberOrderedSmall += +myOrder.value.orderNumber;
    }
    if (myOrder.value.orderSize === 'medium') {
      console.log("hit ORDER MEDIUM");
      this.productSource[this.index].numberOrderedMedium += +myOrder.value.orderNumber;
    }
    if (myOrder.value.orderSize === 'large') {
      console.log("hit ORDER LARGE");
      this.productSource[this.index].numberOrderedLarge += +myOrder.value.orderNumber;
    }

    this.productSource[this.index].numberOrderedTotal = this.productSource[this.index].numberOrderedSmall + this.productSource[this.index].numberOrderedMedium + this.productSource[this.index].numberOrderedLarge;
  }

  upDateSubject(){
    this.productSourceSubject.next(this.productSource);
  }

  getCartTotal(): void {
    this.cartCounter = 0;

    console.log("in CART TOTAL");
    console.log(this.productSource);
    console.log(this.productSource.length);

    for (let product of this.productSource) {
      console.log("GET CART TOTAL -- LOOP");
      this.cartCounter += product.numberOrderedTotal;
    }

    this.cartNumber.next(this.cartCounter);
    console.log("this.cartCounter");
    console.log(this.cartCounter);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
