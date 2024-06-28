import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit{
  cartItems: Producto[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  deleteProduct(_id: string): void {
    this.cartService.deleteProductSale(_id);
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
