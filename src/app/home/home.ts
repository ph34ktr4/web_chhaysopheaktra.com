import { Component } from '@angular/core';
import { MainSlider } from '../main-slider/main-slider';
import { ProductsCard } from '../products-card/products-card';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';
declare const Swal :any;

@Component({
  selector: 'app-home',
  imports: [MainSlider,
    ProductsCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


  constructor(public cartService : CartService, public products : ProductService){

  }

  onAddToCart (product:any) {

    this.cartService.AddItem(product);
    Swal.fire({
    title: "Add Successful",
    icon: "success",
    draggable: true
  });
  }
}
