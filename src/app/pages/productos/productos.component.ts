import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/services/marca.service';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productos: any;
  public page!: number;
  marcas: any;
  productosFiltrados: any;

  constructor(
    private productosService: ProductosService,
    private marcasService: MarcaService
  ) {
    this.ObtenerProductosCards();
    this.ObtenerMarcas();
  }

  ObtenerProductosCards() {
    // debugger
    this.productosService.ObtenerProductosCards().subscribe((datos) => {
      this.productos = datos;
      this.productosFiltrados = datos;
      console.log(this.productos);
    });
  }

  ObtenerMarcas() {
    // debugger
    this.marcasService.ObtenerMarcas().subscribe((datos) => {
      this.marcas = datos;
      console.log(this.marcas);
    });
  }
  filtrarProductos() {
    this.productosFiltrados = this.productos.filter((producto: any) => {
      return this.marcas.some(
        (marca: any) => marca.checked && producto.marc_Id === marca.marc_Id
      );
    });
  }

  ngOnInit(): void {}
}