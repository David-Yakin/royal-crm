import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../pages/Users/user.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isLogged: Observable<boolean> = of(false);
  constructor(private US: UserService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.US.getUserStatus((user: any) => {
      user ? (this.isLogged = user) : this.router.navigate(['']);
    });
    if (this.isLogged) return true;
    return false;
  }
}
