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
        path:'products',
        loadComponent: () => import('./pages/products/products.component').then( c => c.ProductsComponent)
    },
    {
        path:'orders',
        loadComponent: () => import('./pages/orders/orders.component').then( c => c.OrdersComponent)

    },
];
