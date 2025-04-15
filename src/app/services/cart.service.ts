import { Injectable } from '@angular/core';
import { Product, PRODUCTS } from '../../data/products';
import { CartItem } from '../../data/cart-item';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartItems: CartItem[]=[];

  constructor() { }

  addToCart(product: Product){
    this.cartItems.push({product: product, quantity: 1})
  }

  getCart(){
    return this.cartItems
  }

  updateQuantity(productId: number, amount: number){





    this.cartItems.filter(cartItem => cartItem.product.id === productId)
      .map(cartItem => {


        if(cartItem.product.stock >= cartItem.quantity + amount)
          cartItem.quantity += amount
      })
  //  this.cartItems.find(cartItem => )
  }

  deleteItem(productId: number){
    this.cartItems = this.cartItems.filter(cartItem => cartItem.product.id != productId)

  }

  getTotalPrice(){
    return this.cartItems.reduce((total, cartItem) => total+(cartItem.product.price * cartItem.quantity),0)
  }
}
