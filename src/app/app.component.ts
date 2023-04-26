import { ProductosService } from './services/productos/productos.service';
import { Component } from '@angular/core';
import { Productos } from './models/Productos';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  /**
   *
   */
/**
 *
 */
constructor(private cartService: CartService) { 
  
}
  
  
  title = 'odorem-web';
  algo(){

    alert("xss");
  }
}

