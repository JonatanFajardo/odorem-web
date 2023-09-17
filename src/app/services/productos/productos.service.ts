import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from 'src/app/models/Productos';
import { environment } from 'src/environments/environment';
import { catchError, delay, map, Observable, retry, throwError } from 'rxjs';
import { ProductoDetalleDto } from 'src/app/models/producto-detalle';
import { BaseService } from '../BaseService.service';


@Injectable({
  providedIn: 'root'
})
export class ProductosService extends BaseService{

  constructor(private http:HttpClient) {
    super();
   }

  public ObtenerProductosCards():Observable<Productos[]>{
    return this.http.get<Productos[]>(`${environment.apiOdorem}Productos/obtenerProductosCards`).pipe(map(data=>data as Productos[]));
  }

  public buscarProductos(id:number):Observable<ProductoDetalleDto>{
    const url = `${environment.apiOdorem}Productos/BuscarProducto/${id}`;
    return this.http.get<ProductoDetalleDto>(url).pipe(map(data=>data as ProductoDetalleDto));
  }

  public ObtenerProductosSimilaresPorFragancia(id:number, cantidad:number):Observable<Productos[]>{
    const url = `${environment.apiOdorem}Productos/ObtenerProductosSimilaresPorFragancia/${id}/${cantidad}`;
    return this.http.get<Productos[]>(url).pipe(map(data=>data as Productos[]));
  }

  public ObtenerProductosSimilares(cantidad:number):Observable<Productos[]>{
    const url = `${environment.apiOdorem}Productos/ObtenerProductosSimilares/${cantidad}`;
    return this.http.get<Productos[]>(url).pipe(map(data=>data as Productos[]),
    retry(),
    delay(3000),
    catchError(this.handleErrors.bind(this)));
  }

  public ObtenerProductosNovedades(cantidad:number):Observable<Productos[]>{
    const url = `${environment.apiOdorem}Productos/ObtenerProductosNovedades/${cantidad}`;
    return this.http.get<Productos[]>(url).pipe(map(data=>data as Productos[]));
  }

  

}
