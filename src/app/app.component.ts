import { ProductosService } from './services/productos/productos.service';
import { Component } from '@angular/core';
import { Productos } from './models/Productos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  /**
   *
   */
  productos: any;
  constructor(
    private productosService: ProductosService
    ) {
    this.ObtenerProductosCards();
  }
  
  ObtenerProductosCards(){
    // debugger
    this.productosService.ObtenerProductosCards().subscribe(
      (datos)=>{
        this.productos = datos;
        console.log(this.productos);
      }
    );
 }
  title = 'odorem-web';
  algo(){

    alert("xss");
  }
}

