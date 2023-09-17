import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductosDetalleComponent } from './pages/productos/productos-detalle/productos-detalle.component';
import { FaqComponent } from './pages/faq/faq.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: SigninComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'productos-detalle/:id', component: ProductosDetalleComponent },
  { path: "faq", component: FaqComponent },
  { path: "noticias", component: NoticiasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
