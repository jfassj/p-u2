import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './view/lista-productos/lista-productos.component';
import { ListaUserComponent } from './view/lista-user/lista-user.component';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'product', component: ListaProductosComponent},
  {path:'user', component: ListaUserComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
