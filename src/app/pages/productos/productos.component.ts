import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from 'src/app/models/Productos';
import { MarcaService } from 'src/app/services/marca.service';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  precioMinimo = 0;
  precioMaximo = 10000;

  productos: any;
  public page!: number;
  marcas: any;
  productosFiltrados: any;

  constructor(
    private router: Router,
    private productosService: ProductosService,
    private marcasService: MarcaService
  ) {
    this.ObtenerProductosCards();
    this.ObtenerMarcas();
  }
  ngOnInit(): void {}

  ObtenerProductosCards() {
    this.productosService.ObtenerProductosCards().subscribe((datos) => {
      this.productos = datos;
      this.productosFiltrados = datos;
      console.log(this.productos);
    });
  }

  ObtenerMarcas() {
    this.marcasService.ObtenerMarcas().subscribe((datos) => {
      this.marcas = datos;
      console.log(this.marcas);
    });
  }
  
  filtrarProductos() {
    this.productosFiltrados = this.productos.filter(
      (producto: any) =>
        producto.prod_Precio >= this.precioMinimo &&
        producto.prod_Precio <= this.precioMaximo
    );

    // Verifica si alguna marca está seleccionada
    const hayMarcasSeleccionadas = this.marcas.some(
      (marca: any) => marca.checked
    );

    // Filtra los productos en base a las marcas seleccionadas
    this.productosFiltrados = this.productosFiltrados.filter(
      (producto: any) => {
        // Si no hay marcas seleccionadas, no filtra ningún producto
        if (!hayMarcasSeleccionadas) {
          return true;
        }
        // Si hay marcas seleccionadas, filtra solo los productos que corresponden a esas marcas
        return this.marcas.some(
          (marca: any) => marca.checked && producto.marc_Id === marca.marc_Id
        );
      }
    );
  }

  filtradoPrecio() {}
  pageChange($event: any) {
    this.page = $event;
    window.onload = () => {
      window.scrollTo(0, 0);
    };
  }

  redirectToProductosDetalle(id: number) {
    this.router.navigateByUrl('productos-detalle/' + id);
  }
}
