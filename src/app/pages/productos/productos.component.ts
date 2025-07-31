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
  terminoBusqueda: string = '';

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
      // Agregar la propiedad 'checked' a cada marca para los checkboxes
      this.marcas = datos.map((marca: any) => ({
        ...marca,
        checked: false
      }));
    });
  }
  
  filtrarProductos() {
    let productosFiltrados = [...this.productos];

    // Filtro por término de búsqueda
    if (this.terminoBusqueda && this.terminoBusqueda.trim() !== '') {
      const termino = this.terminoBusqueda.toLowerCase().trim();
      productosFiltrados = productosFiltrados.filter((producto: any) =>
        producto.nombre.toLowerCase().includes(termino)
      );
    }

    // Filtro por marcas seleccionadas
    const hayMarcasSeleccionadas = this.marcas?.some(
      (marca: any) => marca.checked
    );

    if (hayMarcasSeleccionadas) {
      productosFiltrados = productosFiltrados.filter((producto: any) => {
        return this.marcas.some(
          (marca: any) => marca.checked && producto.marc_Id === marca.marc_Id
        );
      });
    }

    this.productosFiltrados = productosFiltrados;
  }
  
  pageChange($event: any) {
    this.page = $event;
    window.onload = () => {
      window.scrollTo(0, 0);
    };
  }

  limpiarFiltros() {
    // Reset price filters
    this.precioMinimo = 0;
    this.precioMaximo = 10000;
    
    // Reset search term
    this.terminoBusqueda = '';
    
    // Reset brand checkboxes
    if (this.marcas) {
      this.marcas.forEach((marca: any) => {
        marca.checked = false;
      });
    }
    
    // Reset filtered products to show all products
    this.productosFiltrados = this.productos;
  }

  limpiarBusqueda() {
    this.terminoBusqueda = '';
    this.filtrarProductos();
  }

}
