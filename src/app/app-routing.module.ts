import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './view/lista-productos/lista-productos.component';
import { ListaUserComponent } from './view/lista-user/lista-user.component';
import { LoginComponent } from './view/login/login.component';
import { VentasComponent } from './view/ventas/ventas.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'product', component: ListaProductosComponent, canActivate:[AuthGuard]},
  {path:'user', component: ListaUserComponent, canActivate:[AuthGuard]},
  {path:'ventas', component: VentasComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
