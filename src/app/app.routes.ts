import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        loadComponent: () => import('./pages/home/home.component').then( c => c.HomeComponent)
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full',
    },
    {
        path:'salesperson',
        loadComponent: () => import('./pages/salesperson/salesperson.component').then( c => c.SalespersonComponent)

    },
    {
        path:'products',
        loadComponent: () => import('./pages/products/products.component').then( c => c.ProductsComponent)
    },
    {
        path:'orders',
        loadComponent: () => import('./pages/orders/orders.component').then( c => c.OrdersComponent)

    },
    {
        path:'checkout',
        loadComponent: () => import('./pages/checkout/checkout.component').then( c => c.CheckoutComponent)

    },
];
