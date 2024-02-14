import {Component, OnInit} from '@angular/core';
import {OrderService} from "../service/order.service";
import { MenuItem } from "../models/menu-item.model";
import {CommonModule, CurrencyPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CurrencyPipe, CommonModule, FormsModule,MatCardModule,MatButtonModule
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  orderItems: MenuItem[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderItems = this.orderService.getOrderItems();
    this.orderService.getOrderItemsUpdateListener().subscribe((items: MenuItem[]) => {
      this.orderItems = items;
    });
  }

  refreshOrderItems(): void {
    this.orderItems = this.orderService.getOrderItems();
  }

  removeFromOrder(id: number): void {
    this.orderService.removeFromOrder(id);
    this.refreshOrderItems();
  }

  updateQuantity(id: number, quantity: number): void {
    this.orderService.updateQuantity(id, quantity);

  }
}
