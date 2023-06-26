import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from 'src/app/models/Productos';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card-v2',
  templateUrl: './product-card-v2.component.html',
  styleUrls: ['./product-card-v2.component.scss'],
})
export class ProductCardV2Component implements OnInit {
  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {}
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() precio: number = 0;
  @Input() producto: Productos = new Productos();

  loading = true;

  public onImageLoad() {
    this.loading = false;
  }

  addToCart(producto: Productos) {
    this.cartService.addToCart(producto);
  }
  
  redirectToProductosDetalle(id: number) {
    this.router.navigateByUrl('/productos-detalle/' + id);
  }
}
