import { Component } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';
@Component({
  selector: 'app-product',
  imports: [ProductsCard],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

 constructor(public cartService : CartService, public products : ProductService){

  }
  onAddToCart (product:any) {
    this.cartService.AddItem(product);
  }
}
