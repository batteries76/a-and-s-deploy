"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about.component');
var dashboard_component_1 = require('./dashboard.component');
var product_detail_component_1 = require('./product-detail.component');
var contact_component_1 = require('./contact.component');
var checkout_component_1 = require('./checkout.component');
var appRoutes = [
    {
        path: 'detail/:id',
        component: product_detail_component_1.ProductDetailComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'checkout',
        component: checkout_component_1.CheckoutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map