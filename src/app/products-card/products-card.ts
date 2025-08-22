import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConvertToKhrPipe } from '../convert-to-khr-pipe';
import { RouterLink } from '@angular/router';
import { CartService } from '../service/cart-service';
declare const Swal: any;

@Component({
  selector: 'app-products-card',
  imports: [CurrencyPipe,
    ConvertToKhrPipe, RouterLink],
  templateUrl: './products-card.html',
  styleUrl: './products-card.css'
})
export class ProductsCard {

  constructor(public cartService : CartService){};

  @Input() product: any = [];
  @Output() addToCart: any = new EventEmitter<any>();

  onAddToCart(product:any){
    this.cartService.AddItem(product);
    Swal.fire({
    title: "Add Successful",
    icon: "success",
    draggable: true
  });
  }
}
