import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  routes = [{
    routeLink: 'home',
    label: 'Home',
  },
  {
    routeLink: 'products',
    label: 'Produtos',
  },
  {
    routeLink: 'orders',
    label: 'Pedidos',
  }]

}
