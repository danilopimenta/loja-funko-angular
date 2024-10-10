import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import {Product} from "../../model/product";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(productId);

    if (!this.product) {
      window.alert('Produto não encontrado!');
      this.router.navigate(['/']);
    }
  }

  addToCart(product: Product) {
    if (this.quantity < 1) {
      window.alert('A quantidade deve ser pelo menos 1.');
      return;
    }
    this.cartService.addToCart(product, this.quantity);
    this.router.navigate(['/carrinho'], { state: { addedToCart: true } });
  }
}
