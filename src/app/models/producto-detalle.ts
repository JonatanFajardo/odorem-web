export interface IProductoDetalleDto {
  id: number;
  linkDocumento: string;
  nombreDocumento: string;
  nombre: string;
  description: string;
  precioBruto: number | null;
  precioNeto: number | null;
  idMarca: number | null;
  sexo: string;
  anioLanzamiento: number | null;
  idGenero: number | null;
  idTipoFragancia: number | null;
  idCategoria: number | null;
  notasPrincipales: string;
  marca: string;
  precio: number | null;
  nombreGenero: string;
  categoria: string;
  tipoFragancia: string;
}

export class ProductoDetalleDto implements IProductoDetalleDto {
  id: number;
  linkDocumento: string;
  nombreDocumento: string;
  nombre: string;
  description: string;
  precioBruto: number | null;
  precioNeto: number | null;
  idMarca: number | null;
  sexo: string;
  anioLanzamiento: number | null;
  idGenero: number | null;
  idTipoFragancia: number;
  idCategoria: number | null;
  notasPrincipales: string;
  marca: string;
  precio: number | null;
  nombreGenero: string;
  categoria: string;
  tipoFragancia: string;

  constructor(data?: ProductoDetalleDto) {
    if (data != null) {
      this.id = data.id;
      this.linkDocumento = data.linkDocumento;
      this.nombreDocumento = data.nombreDocumento;
      this.nombre = data.nombre;
      this.description = data.description;
      this.precioBruto = data.precioBruto;
      this.precioNeto = data.precioNeto;
      this.idMarca = data.idMarca;
      this.sexo = data.sexo;
      this.anioLanzamiento = data.anioLanzamiento;
      this.idGenero = data.idGenero;
      this.idTipoFragancia = data.idTipoFragancia;
      this.idCategoria = data.idCategoria;
      this.notasPrincipales = data.notasPrincipales;
      this.marca = data.marca;
      this.precio = data.precio;
      this.nombreGenero = data.nombreGenero;
      this.categoria = data.categoria;
      this.tipoFragancia = data.tipoFragancia;
    } else {
      this.id = 0;
      this.linkDocumento = '';
      this.nombreDocumento = '';
      this.nombre = '';
      this.description = '';
      this.precioBruto = 0;
      this.precioNeto = 0;
      this.idMarca = 0;
      this.sexo = '';
      this.anioLanzamiento = 0;
      this.idGenero = 0;
      this.idTipoFragancia = 0;
      this.idCategoria = 0;
      this.notasPrincipales = '';
      this.marca = '';
      this.precio = 0;
      this.nombreGenero = '';
      this.categoria = '';
      this.tipoFragancia = '';
    }
  }
}
