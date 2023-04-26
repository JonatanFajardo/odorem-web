export interface Productos {
  prod_Id: number;
  prod_Nombre: string;
  prod_Precio: number;
  prod_LinkDocumento: string;
  prod_Documento: string | null;
  medida: string | null;
  marc_Id: number;
  marca: string | null;
  //local
  cantidad:number;
}
