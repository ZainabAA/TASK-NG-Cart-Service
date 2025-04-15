import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../data/products';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../../data/cart-item';

@Component({
  selector: 'app-cart-item-card',
  standalone: true,
  imports: [],
  templateUrl: './cart-item-card.component.html',
  styleUrl: './cart-item-card.component.css'
})
export class CartItemCardComponent {
  @Input() cartItem!: CartItem
  @Output() updateAction = new EventEmitter();


  constructor(private _cartService: CartService){

  }

  DeleteItem(){
    this._cartService.deleteItem(this.cartItem.product.id)
    this.updateAction.emit()
    console.log(this._cartService.getCart())
  }


  UpdateQuantity(amount: number){

    if((amount+this.cartItem.quantity) <=0)
      this.DeleteItem()

    else
      this._cartService.updateQuantity(this.cartItem.product.id, amount)
    this.updateAction.emit();
  }

}
