import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { Producto } from 'src/app/model/producto';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {
  products: Producto[] = [];

  constructor(private productService: ProductoService, private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.productListMethod();
  }

  productListMethod(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
      error: (error) => {
        console.error('Error fetching products', error);
      }
    });
  }

  addToCart(product: Producto): void {
    this.cartService.addToCart(product);
    console.log('Product added to cart:', product);
  }
}

