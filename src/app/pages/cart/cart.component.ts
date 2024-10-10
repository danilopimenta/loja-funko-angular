import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {CommonModule} from "@angular/common";
import {Product} from "../../model/product";
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  items: { product: Product; quantity: number }[] = [];
  showConfirmation: boolean = false;

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.items$.subscribe((items) => {
      this.items = items;
    });
    this.loadCart();
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['addedToCart']) {
      this.showConfirmation = true;
      setTimeout(() => (this.showConfirmation = false), 3000);
    }
  }

  loadCart() {
    this.items = this.cartService.getItems();
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity < 1) {
      this.removeItem(productId);
    } else {
      this.cartService.updateQuantity(productId, quantity);
      this.loadCart();
    }
  }

  getSubtotal() {
    return this.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }

  getEstimatedTax() {
    const taxRate = 0.1;
    return this.getSubtotal() * taxRate;
  }

  getTotal() {
    return this.getSubtotal() + this.getEstimatedTax();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }
}
