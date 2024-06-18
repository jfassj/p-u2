import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url="http://localhost:5000/api/user";
  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  addUser(product:any):Observable<User>{
    return this.http.post<User>(this.url,product)
  }
  editUser(product:any):Observable<User>{
    return this.http.patch<User>(this.url,product)
  }
  deleteUser(_id:string):Observable<User>{
    return this.http.delete<User>(this.url+"/"+_id)
  }
}
