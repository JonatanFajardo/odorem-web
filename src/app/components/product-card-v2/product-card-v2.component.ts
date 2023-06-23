import { Component, OnInit, Input } from '@angular/core';
import { Productos } from 'src/app/models/Productos';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card-v2',
  templateUrl: './product-card-v2.component.html',
  styleUrls: ['./product-card-v2.component.scss']
})
export class ProductCardV2Component implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  @Input() imageUrl: string="";
  @Input() title: string="";
  @Input() precio: number=0;
  @Input() producto: Productos = new Productos();

  loading = true;

  public onImageLoad() {
    console.log("3");
    
    this.loading = false; 
  }

  
  addToCart(producto:Productos){
    // let Productos:Productos={
    //   Id:1,
    //   Nombre:
    // }
    // let cart = JSON.parse(localStorage.getItem('titulo',title));
// cart.push(producto);
producto.cantidad=1;
this.cartService.addToCart(producto)
// localStorage.setItem('productoCart', JSON.stringify(producto));

  }

}
