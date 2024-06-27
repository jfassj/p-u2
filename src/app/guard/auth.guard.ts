import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../service/login.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{
  constructor(private authService:LoginService,
    private router:Router,
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let response = true;
    console.log(this.authService.isAuthenticatedUser());

    if (!this.authService.isAuthenticatedUser()){
      this.router.navigate(['/login']);
      response=false
    }
    return response;
  }
}
