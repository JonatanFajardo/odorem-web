import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/Productos';
import { ProductosService } from '../services/productos/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ProductosSimilares : Productos[] = [];
  obtenerProductosNovedades : Productos[] = [];

  constructor(private productosServices: ProductosService) {
    this.ObtenerProductosSimilares();
   }

  ngOnInit(): void {
  }

  ObtenerProductosSimilares(){
    let cantidad = 15;
    this.productosServices.ObtenerProductosSimilares(cantidad).subscribe((datos) => {
      this.ProductosSimilares = datos;

    });
  }

  ObtenerProductosNovedades(){
    let cantidad = 15;
    this.productosServices.ObtenerProductosNovedades(cantidad).subscribe((datos) => {
      this.obtenerProductosNovedades = datos;
    });
  }

}
