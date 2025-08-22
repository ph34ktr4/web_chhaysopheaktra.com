import { Component, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../service/cart-service';

declare const $: any;
declare const axios: any;
declare const Swal: any;

@Component({
  selector: 'app-products-detail',
  imports :[CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductsDetail{

  public product: any = [];
  
  @Output() addToCart = new EventEmitter<any>();

  constructor(public route: ActivatedRoute, public cartService : CartService) {}

  ngOnInit(): void {
    const product_id: string | null = this.route.snapshot.queryParamMap.get('product_id');

    const url: string = 'https://sv-gen-api.bczin2zin2takeo.us/api/product_detail?id=' + product_id;

    $.LoadingOverlay("show");

    axios.get(url)
      .then((response: any) => {
        this.product = response.data; 
        console.log(this.product)
        console.log(response.status)
      })
      .catch((error: any) => {
        console.error('Error loading product:', error.status);
        this.product = null;
      })
      .finally(() => {
        $.LoadingOverlay("hide");
      });

    console.log('product_id:', product_id);
  }

  onAddToCartfromdetail(product: any) {
    this.cartService.AddItem(product);
    Swal.fire({
    title: "Add Successful",
    icon: "success",
    draggable: true
  });
  }

  addToFavorites(product: any) {
    console.log('Added to favorites:', product);
  }
}
