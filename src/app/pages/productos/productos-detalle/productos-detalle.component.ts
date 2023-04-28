import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/models/Productos';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.scss']
})
export class ProductosDetalleComponent implements OnInit {
 
  constructor(private route: ActivatedRoute, private productosServices: ProductosService) { }

  productos: any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id); // imprime el valor de id
      this.buscarProductos(id);
    });
  }

  buscarProductos(id:number){
    this.productosServices.buscarProductos(id).subscribe((datos) => {
      this.productos = datos;
      console.log(this.productos);
    });
  }

}
