import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from 'src/app/models/Productos';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { ProductoDetalleDto } from 'src/app/models/producto-detalle';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
    
  public handleErrors(error: HttpErrorResponse): Observable<never> {
    let errorMessage = this.getErrorMessage(error);
    return throwError(() => errorMessage);
    
    // if (error.error instanceof ErrorEvent) {
    //   console.error('Error:', error.error.message);
    //   return throwError('Error del lado del cliente. Por favor, inténtalo de nuevo.');
    // } else {
    //   console.error('Error 2:', error.error.message);
    // }
  }

  private getErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 400:
        return 'Error de solicitud: La solicitud es incorrecta.';
      case 401:
        return 'No autorizado: Debes iniciar sesión para acceder a este recurso.';
      case 403:
        return 'Prohibido: No tienes permisos para acceder a este recurso.';
      case 404:
        return 'Recurso no encontrado: El recurso solicitado no existe.';
      case 500:
        return 'Error interno del servidor: Hubo un problema en el servidor. Por favor, inténtalo más tarde.';
      default:
        return 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo dentro de un momento.';
    }
  }
}