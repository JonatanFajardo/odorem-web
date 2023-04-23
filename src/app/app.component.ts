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

  
  title = 'odorem-web';
  algo(){

    alert("xss");
  }
}

