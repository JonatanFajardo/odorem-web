import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from 'src/app/models/Productos';
import { ProductoDetalleDto } from 'src/app/models/producto-detalle';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.scss']
})
export class ProductosDetalleComponent implements OnInit {
 
  constructor(private route: ActivatedRoute,private router: Router, private productosServices: ProductosService) { }

  productos: ProductoDetalleDto = new ProductoDetalleDto();
  ProductosSimilares : Productos[] = [];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.buscarProductos(id);
    });
  }

  buscarProductos(id:number){
    this.productosServices.buscarProductos(id).subscribe((datos) => {
      this.productos = datos;
      this.ObtenerProductosSimilares(this.productos.idTipoFragancia);
    });
  }

  ObtenerProductosSimilares(id:number){
    let cantidad = 4;
    this.productosServices.ObtenerProductosSimilares(id, cantidad).subscribe((datos) => {
      this.ProductosSimilares = datos;
    });
  }

  redirectToProductosDetalle(id: number) {
    this.router.navigateByUrl('/productos-detalle/' + id);
  }
}
