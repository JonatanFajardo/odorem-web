import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Marcas } from '../models/marcas.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http:HttpClient) { }

  ObtenerMarcas():Observable<Marcas[]>{ 
    const url = `${environment.apiOdorem}Marca/ObtenerMarcas`;
      return this.http.get<Marcas[]>(url).pipe(map(data=>data as Marcas[]));
  }
}
