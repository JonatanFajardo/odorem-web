import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from 'src/app/models/Productos';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  public ObtenerProductosCards():Observable<Productos[]>{
    return this.http.get<Productos[]>(`${environment.apiOdorem}Productos/obtenerProductosCards`).pipe(map(data=>data as Productos[]));
  }
}
