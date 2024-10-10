import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsSubject = new BehaviorSubject<{ product: Product; quantity: number }[]>([]);
  items$ = this.itemsSubject.asObservable();


  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.itemsSubject.next(JSON.parse(storedCart));
    }
  }

  addToCart(product: Product, quantity: number = 1) {
    let items = this.itemsSubject.getValue();
    const item = items.find((i) => i.product.id === product.id);
    if (item) {
      item.quantity += quantity;
    } else {
      items.push({ product, quantity });
    }
    this.itemsSubject.next(items);
    this.saveCart(items);
  }

  removeFromCart(productId: number) {
    const items = this.itemsSubject.getValue().filter((i) => i.product.id !== productId);
    this.itemsSubject.next(items);
    this.saveCart(items);
  }

  updateQuantity(productId: number, quantity: number) {
    const items = this.itemsSubject.getValue();
    const item = items.find((i) => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
    }
    this.itemsSubject.next(items);
    this.saveCart(items);
  }

  getItems() {
    return this.itemsSubject.getValue();
  }

  clearCart() {
    this.itemsSubject.next([]);
    localStorage.removeItem
  }

  private saveCart(items: { product: Product; quantity: number }[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }
}
