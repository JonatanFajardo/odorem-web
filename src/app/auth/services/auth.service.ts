import { environment } from './../../../environments/environment';
import { Usuarios } from './../models/usuarios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){

   }

  public authenticateAccess (user:string, pass: string):Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(`${environment.apiOdorem}authenticateAccess/${user}/${pass}`).pipe(map(data=>data as Usuarios[]))
  }
}
