import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { FormProductComponent } from '../form-product/form-product.component';
import {MatDialog} from '@angular/material/dialog';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit{
  productlist!: MatTableDataSource<Producto>;
  columnsHeader=["date","name","price","amount","status","opciones"]
  constructor(private productService:ProductoService,
    public dialog: MatDialog
    ) {}

    ngOnInit(): void {
    this.productListMethod();
    }

    productListMethod(){
    try{
    this.productService.getProducts()
    .subscribe(item => this.productlist= new MatTableDataSource(item))
    console.log(this.productlist.data)

    }catch(error){
    console.log(error)
    }

    }

    editDialog(element:Producto){
      console.log(element);

      const dialogRef = this.dialog.open(FormProductComponent, {
        data: element,
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('The dialog was closed');
        if(result){
          this.productListMethod();
        }

      });

    }

    openDialog(){
      const dialogRef = this.dialog.open(FormProductComponent, {
        data: null,
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('The dialog was closed');
        if(result){
          this.productListMethod();
        }

      });
    }

    deleteDialog(element:Producto){
      const dialogRef = this.dialog.open(DeleteProductComponent, {
        data: element,
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('The dialog was closed');
        if(result){
          this.productListMethod();
        }

      });
    }

    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.productlist.filter=filterValue.trim();

    }


}

