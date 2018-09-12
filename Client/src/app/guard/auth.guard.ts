import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


//checks if user is logged in, to allow access to certain paths
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    //check if logged in
    if(localStorage.getItem('currentUser')) return true; 

    //if not, reroute
    this.router.navigate(['login'], { queryParams: {returnUrl: state.url}});
    return false;

  }
}