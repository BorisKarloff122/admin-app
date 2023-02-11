import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";
import {mockLoginFlag} from "../../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdminGuard implements CanActivate {
  private env = environment;
  constructor(
    private router: Router
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.env.useMocks){
      return true;
    }

    let flag = mockLoginFlag();
    if(!flag){
      this.router.navigate(['control']);
      console.log('Navigation blocked');
      return false
    }
    return true;
  }

}
