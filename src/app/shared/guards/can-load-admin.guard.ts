import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  Router,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {mockLoginFlag} from "../../utils/utils";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CanLoadAdminGuard implements CanLoad{
  private env = environment;
  constructor(
    private router: Router
  ) {}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    if(!this.env.useMocks){
      return true;
    }

    let flag = mockLoginFlag();
    if(!flag){
      this.router.navigate(['control']);
      return false
    }
    return true;
  }

}
