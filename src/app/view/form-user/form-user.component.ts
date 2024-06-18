import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListaUserComponent } from '../lista-user/lista-user.component';
import { User } from 'src/app/model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit{

  formGroup!:FormGroup

  constructor(public dialogRef:
    MatDialogRef<ListaUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService:UsuarioService,
    private formBuilder:FormBuilder,
  ) {

  }

  ngOnInit(): void {
    console.log(this.data);

    this.initForm()

  }
  initForm(){
    if(this.data){

    this.formGroup=this.formBuilder.group({
      username:[this.data.username,Validators.required],
      name:[this.data.name,Validators.required],
      lastName:[this.data.lastName||"",Validators.required],
      email:[this.data.email||"",Validators.required],
      phone:[this.data.phone||"",Validators.required],
      role:[this.data.role, Validators.required],
      password:[this.data.password||"",Validators.required]
      });
    }else{
      this.formGroup=this.formBuilder.group({
        username:["",Validators.required],
        name:["",Validators.required],
        lastName:["",Validators.required],
        email:["",Validators.required],
        phone:["",Validators.required],
        role:["",Validators.required],
        password:["",Validators.required]
        });
    }
  }

  save(): void{
    let request={
      id:this.data!=null?this.data._id:null,
      username: this.formGroup.value.username,
      name: this.formGroup.value.name,
      lastName: this.formGroup.value.lastName,
      email: this.formGroup.value.email,
      phone: this.formGroup.value.phone,
      role: this.formGroup.value.role,
      password: this.formGroup.value.password,
    }

    try{
      if(!this.data){
        this.userService.addUser(request).subscribe(item=>console.log(item))
      }else{
        this.userService.editUser(request).subscribe(item=>console.log(item)
        )
      }
      this.dialogRef.close(true)
    }catch(error){
      console.log(error);

    }
  }
}
