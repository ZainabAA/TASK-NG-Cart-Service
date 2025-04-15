import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../data/products';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CartItem } from '../../../data/cart-item';
import { CartItemCardComponent } from "../../components/cart-item-card/cart-item-card.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductCardComponent, CartItemCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {

  cartItems: CartItem[]=[]
  totalPrice: number = 0
  constructor(private _cartService: CartService){
    this.cartItems = _cartService.getCart()
    this.totalPrice = _cartService.getTotalPrice()
    console.log("cart component: ")
    console.log(_cartService.getCart())
  }

  updateCart(){
    this.cartItems = this._cartService.getCart()
    this.totalPrice = this._cartService.getTotalPrice()
  }





}
