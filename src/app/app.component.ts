import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './core/side-menu/side-menu.component';
import { MainComponent } from "./core/main/main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideMenuComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-playground';
}
