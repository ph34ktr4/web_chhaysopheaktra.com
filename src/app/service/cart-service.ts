import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { 
    this.cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
  }

  private cart: any =[]

  AddItem(item: any ): void {
    item.qty = 1
    let dbl_index : number = this.cart.findIndex((obj: any ) => obj.id === item.id )
    if (dbl_index > -1){
        this.cart[dbl_index].qty += 1
    }
    else{
        this.cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));

    
  }

  GetItem() :any {
    return this.cart;
  }

GetTotal(): number {
  let total: number = 0;

  this.cart.forEach((item: { price: number; qty: number }) => {
    total += item.price * item.qty;
  });

  return total;
}

removeItem(item:any) {
  this.cart.splice(this.cart.indexOf(item), 1);
  localStorage.setItem('cart', JSON.stringify(this.cart));
}


incrementQty(item: any){
  let index: any = this.cart.indexOf(item);
  if (index > -1){
    this.cart[index].qty ++
    localStorage.setItem('cart', JSON.stringify(this.cart));
  } 
}

decrementQty(item: any){
  let index: any = this.cart.indexOf(item);
  if (index > -1){
    this.cart[index].qty --
    localStorage.setItem('cart', JSON.stringify(this.cart));
  } 
}

}
