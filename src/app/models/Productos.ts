export interface IProductos {
  idProducto: number;
  nombre: string;
  description: string;
  precio: number;
  linkDocumento: string;
  documento: string | null;
  medida: string | null;
  marc_Id: number;
  marca: string | null;
  categoria: string;
  //local
  cantidad:number;
}

export class Productos implements IProductos {
  idProducto: number;
  nombre: string;
  description: string;
  precio: number;
  linkDocumento: string;
  documento: string | null;
  medida: string | null;
  marc_Id: number;
  marca: string | null;
  categoria: string;
  cantidad: number;

  constructor(data?: Productos) {
    if(data != null){
      this.idProducto = data.idProducto;
      this.nombre = data.nombre;
      this.description = data.description;
      this.precio = data.precio;
      this.linkDocumento = data.linkDocumento;
      this.documento = data.documento;
      this.medida = data.medida;
      this.marc_Id = data.marc_Id;
      this.marca = data.marca;
      this.categoria = data.categoria;
      this.cantidad = data.cantidad;
    }
    this.idProducto = 0;
    this.nombre = '';
    this.description = '';
    this.precio = 0;
    this.linkDocumento = '';
    this.documento = '';
    this.medida = '';
    this.marc_Id = 0;
    this.marca = '';
    this.categoria = '';
    this.cantidad = 0;
  }
}
