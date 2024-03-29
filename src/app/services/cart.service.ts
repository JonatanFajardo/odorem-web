import { Injectable } from '@angular/core';
import { Productos } from '../models/Productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  productos: Productos[] = [];
  propertyLocalStorage:string = 'productoCart';

  addToCart(producto: Productos) {
    let productoList:Productos[] = JSON.parse(localStorage.getItem(this.propertyLocalStorage) ?? '[]');
     // Buscar si el producto ya existe en el carrito
    let index = productoList.findIndex(p => p.idProducto === producto.idProducto);
    
    if (index !== -1) {
      // Si el producto ya existe, aumentar su cantidad
      productoList[index].cantidad += producto.cantidad;
    } else {
      // Si el producto no existe, agregarlo al carrito
      producto.cantidad = 1;
      productoList.push(producto);
    }
    // se agrega el listado de productos
    localStorage.setItem(this.propertyLocalStorage, JSON.stringify(productoList));
  }

  deleteToCart(producto: Productos) {
    let productoList:Productos[] =JSON.parse(localStorage.getItem(this.propertyLocalStorage) ?? '[]');
    let storageProduct = productoList.find(p => p.idProducto === producto.idProducto);
    let cantidadRestar = 1;

    if ( storageProduct?.cantidad == null || storageProduct?.cantidad <= 1){
      let index = productoList.findIndex(p => p.idProducto === producto.idProducto);;
      console.log(index);
      
      productoList.splice(index, 1);
    }
    if (storageProduct !== undefined) {
      //se resta la cantidad
      storageProduct.cantidad = storageProduct.cantidad - cantidadRestar;
    }
    localStorage.setItem(this.propertyLocalStorage, JSON.stringify(productoList));
    
  }

  clearCart() {
    this.productos = [];
  }

  GetCart(): Productos[] { 
    this.productos =JSON.parse(localStorage.getItem(this.propertyLocalStorage) ?? '[]');
    return this.productos; 
  }
}
