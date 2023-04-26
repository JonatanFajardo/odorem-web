import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/Productos';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  productos: Productos[] = [];
  subtotal:number=0;

  constructor(private cartService: CartService) {
  }
  
  ngOnInit(): void {
    this.getCart();

  }

  getCart() {
    this.productos = this.cartService.GetCart();
    this.subtotal = this.productos.reduce((total: number, producto: Productos) => {
      return total + producto.prod_Precio;
    }, 0);
    console.log(this.productos);
    
  }

  removeToCart(producto:Productos){
    this.cartService.deleteToCart(producto);
    this.getCart();
  }
}
