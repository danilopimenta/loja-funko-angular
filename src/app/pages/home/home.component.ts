import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {CommonModule} from "@angular/common";
import {ProductCardComponent} from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
