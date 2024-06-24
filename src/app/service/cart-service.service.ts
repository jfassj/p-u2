import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cartItemsSubject = new BehaviorSubject<Producto[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  addToCart(product: Producto): void {
    const currentCartItems = this.cartItemsSubject.value;
    this.cartItemsSubject.next([...currentCartItems, product]);
  }

  getCartItems(): Producto[] {
    return this.cartItemsSubject.value;
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
  }
}
