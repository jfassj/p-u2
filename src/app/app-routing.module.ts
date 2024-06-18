import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './view/lista-productos/lista-productos.component';
import { ListaUserComponent } from './view/lista-user/lista-user.component';

const routes: Routes = [
  {path: 'product', component: ListaProductosComponent},
  {path:'user', component: ListaUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
