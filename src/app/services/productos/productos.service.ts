import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from 'src/app/models/Productos';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { ProductoDetalleDto } from 'src/app/models/producto-detalle';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  public ObtenerProductosCards():Observable<Productos[]>{
    return this.http.get<Productos[]>(`${environment.apiOdorem}Productos/obtenerProductosCards`).pipe(map(data=>data as Productos[]));
  }

  public buscarProductos(id:number):Observable<ProductoDetalleDto>{
    const url = `${environment.apiOdorem}Productos/BuscarProducto/${id}`;
    return this.http.get<ProductoDetalleDto>(url).pipe(map(data=>data as ProductoDetalleDto));
  }

  public ObtenerProductosSimilares(id:number, cantidad:number):Observable<Productos[]>{
    const url = `${environment.apiOdorem}Productos/ObtenerProductosSimilares/${id}/${cantidad}`;
    return this.http.get<Productos[]>(url).pipe(map(data=>data as Productos[]));
  }
}
