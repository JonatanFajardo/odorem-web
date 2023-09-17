import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NoticiasFraganciasDto } from '../models/noticias-fragancias.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  NoticiasFragancias():Observable<NoticiasFraganciasDto[]>{
    const url = `${environment.apiOdorem}NoticiasFragancias/ObtenerNoticiasFragancias`
    return this.http.get(url).pipe(map(datos=>datos as NoticiasFraganciasDto[]));
  }
}
