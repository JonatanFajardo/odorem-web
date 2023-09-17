import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FAQDto } from '../models/faq-model';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private httpClient: HttpClient) { }

  ObtenerFaq():Observable<FAQDto[]>{
    const url  = `${environment.apiOdorem}Faq/ObtenerFaq`;
    return this.httpClient.get<FAQDto[]>(url).pipe(map(data=>data as FAQDto[]));
  }

}
