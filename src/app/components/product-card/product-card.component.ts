import { Component, Input } from '@angular/core';
import { Product } from '../../../data/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})



export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private _cartService: CartService){
    this.getCart()
  }

  addToCart(){
    this._cartService.addToCart(this.product)
  }

  getCart(){
    this._cartService.getCart()
  }

}
