import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


//checks if user is logged in, to allow access to certain paths
@Injectable({
  providedIn: 'root',
})
export class DoubleLoginGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    //check if logged in. if yes, route back
    if(localStorage.getItem('currentUser'))
    {
      this.router.navigate([state.url], { queryParams: {returnUrl: state.url}});
      return false;
    }    

    //if not, stay
    return true;

  }
}