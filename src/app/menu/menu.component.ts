import { Component } from '@angular/core';
import { MenuItem} from "../models/menu-item.model";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import { OrderService} from "../service/order.service";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardModule,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardContent, MatCardActions, MatCardTitle, MatCard, MatCardHeader, MatButton, MatCardImage,MatCardModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    new MenuItem(1, 'Burger', 'Un bon dwich sa maman', 5, 'burger.jpeg', 'Burgers'),
    new MenuItem(2, 'TowerBacons', 'full cochon c\'ui ci', 5, 'bacon.jpeg', 'Burgers'),
    new MenuItem(3, 'Chicken', 'Le poulet c\'est trop bon ', 5, 'chicken.jpeg', 'Burgers'),
    new MenuItem(4, 'Fries', 'French Fries de belgique', 5, 'fries.jpeg', 'Accompagnement'),
    new MenuItem(5, 'Coke', ' Jerome favorite drink ', 5, 'coca.jpeg', 'Boisson')
  ];
  constructor(private orderService: OrderService) {
  }
  addToOrder(item: MenuItem): void {
    this.orderService.addToOrder(item);
  }

}
