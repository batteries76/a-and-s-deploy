import { ModuleWithProviders }     from '@angular/core';
import { Routes, RouterModule }    from '@angular/router';

import { AboutComponent }          from './about.component';
import { DashboardComponent }      from './dashboard.component';
import { ProductDetailComponent }  from './product-detail.component';
import { ContactComponent }        from './contact.component';
import { CustomComponent }         from './custom.component';
import { FaqsComponent }           from './faqs.component';
import { CheckoutComponent }       from './checkout.component';

const appRoutes: Routes = [
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
