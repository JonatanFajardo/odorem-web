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

  productos: Productos[] = [];
  public page!: number;
  marcas: any;
  productosFiltrados: Productos[] = [];

  constructor(
    private router: Router,
    private productosService: ProductosService,
    private marcasService: MarcaService
  ) {
    this.ObtenerProductosCards();
    this.ObtenerMarcas();
  }
  ngOnInit(): void {

  }

  ObtenerProductosCards() {
    this.productosService.ObtenerProductosCards().subscribe((datos) => {
      this.productos = datos;
      this.productosFiltrados = datos;
    });
  }

  ObtenerMarcas() {
    this.marcasService.ObtenerMarcas().subscribe((datos) => {
      this.marcas = datos;
    });
  }
  
  filtrarProductos() {
    this.productosFiltrados = this.productos.filter(
      (producto: any) =>
        producto.Precio >= this.precioMinimo &&
        producto.Precio <= this.precioMaximo
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
          (marca: any) => marca.checked && producto.Id === marca.Id
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
    this.router.navigateByUrl('/productos-detalle/' + id);
  }
}
