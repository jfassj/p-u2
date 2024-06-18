import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/service/usuario.service';
import { FormUserComponent } from '../form-user/form-user.component';
import {MatDialog} from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-lista-user',
  templateUrl: './lista-user.component.html',
  styleUrls: ['./lista-user.component.scss']
})
export class ListaUserComponent implements OnInit{
  userlist!: MatTableDataSource<User>;
  columnsHeader=["date", "name", "lastName","email","phone","status","opciones"]
  constructor(private userService:UsuarioService,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.userListMethod()
  }

  userListMethod(){
    try{
      this.userService.getUsers()
      .subscribe(item => this.userlist= new MatTableDataSource(item))
      console.log(this.userlist.data)

      }catch(error){
      console.log(error)
      }
  }

  editDialog(element:User){
    console.log(element);

    const dialogRef = this.dialog.open(FormUserComponent, {
      data: element,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      if(result){
        this.userListMethod();
      }

    });

  }

  openDialog(){
    const dialogRef = this.dialog.open(FormUserComponent, {
      data: null,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      if(result){
        this.userListMethod();
      }

    });
  }

  deleteDialog(_id:string){
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: null,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      if(result){
        this.deleteUser(_id);
      }

    });
  }

  deleteUser(_id:string){
    try{
      this.userService.deleteUser(_id).subscribe(item=>console.log(item))
      this.userListMethod();

      }catch(error){
        console.log(error);
      }
  }

  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;

  this.userlist.filter=filterValue.trim();

  }
}
