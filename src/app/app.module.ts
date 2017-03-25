import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { FormsModule }             from '@angular/forms';
import { ReactiveFormsModule }     from '@angular/forms';
import { HttpModule }              from '@angular/http';

import { AppComponent }            from './app.component';

import { InMemoryWebApiModule }    from 'angular-in-memory-web-api';
import { InMemoryDataService }     from './in-memory-data.service';

import { ProductDetailComponent }  from './product-detail.component';
import { AboutComponent }          from './about.component';
import { DashboardComponent }      from './dashboard.component';
import { ContactComponent }        from './contact.component';
import { CustomComponent }         from './custom.component';
import { FaqsComponent }           from './faqs.component';
import { CheckoutComponent }       from './checkout.component';
import { FooterComponent }         from './footer.component';
import { ContactFormComponent }    from './contact-form.component';
import { ProductDisplayComponent } from './product-display.component';
import { ProductModalComponent }   from './product-modal.component';
import { ModalOrderAreaComponent } from './modal-order-area.component';
import { CartCounterComponent }    from './cart-counter.component';
import { CheckoutDetailComponent } from './checkout-detail.component';

import { ProductService }          from './product.service';
import { ModalService }            from './modal.service';

import { routing }                 from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductDetailComponent,
    AboutComponent,
    ContactComponent,
    CustomComponent,
    FaqsComponent,
    CheckoutComponent,
    FooterComponent,
    ContactFormComponent,
    ProductDisplayComponent,
    ProductModalComponent,
    ModalOrderAreaComponent,
    CartCounterComponent,
    CheckoutDetailComponent
  ],
  providers: [
    ProductService,
    ModalService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
