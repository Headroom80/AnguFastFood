import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderItems: MenuItem[] = [];
  private orderItemsUpdated = new Subject<MenuItem[]>();

  constructor() { }

  getOrderItemsUpdateListener() {
    return this.orderItemsUpdated.asObservable();
  }

  getOrderItems(): MenuItem[] {
    return [...this.orderItems];
  }

  addToOrder(item: MenuItem): void {
    const existingItem = this.orderItems.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 0) + 1;
    } else {
      item.quantity = 1;
      this.orderItems.push(item);
    }
    this.orderItemsUpdated.next([...this.orderItems]);
  }

  removeFromOrder(id: number): void {
    this.orderItems = this.orderItems.filter(item => item.id !== id);
    this.orderItemsUpdated.next([...this.orderItems]);
  }

  updateQuantity(id: number, quantity: number): void {
    const item = this.orderItems.find(i => i.id === id);
    if (item) {
      item.quantity = quantity;
      this.orderItemsUpdated.next([...this.orderItems]);
    }
  }
}
