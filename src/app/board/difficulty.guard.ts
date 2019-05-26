import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DifficultyGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const url: string = state.url;
      if (url.match(/\/notes\/easy$|\/notes\/hard$/)) {
        return true;
      }
      this.router.navigate(['/gameselect']);
      return false;         
    }
  }