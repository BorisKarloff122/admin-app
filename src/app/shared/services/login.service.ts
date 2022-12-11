import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {UserLogin} from "../models/user";
import {environment} from "../../../environments/environment";
import {checkCreds, HttpResponseObj, logOut} from "../../utils/utils";
import {IHttpResponse} from "../models/httpResponse.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private env = environment;
  constructor(
    private http: HttpClient
  ) { }

  public login(loginData: UserLogin): Observable<IHttpResponse>{
    if(this.env.useMocks){
      return checkCreds(loginData);
    }
    return this.http.post<IHttpResponse>(`${this.env.server}/login`, loginData);
  }

  public logOut(): Observable<IHttpResponse>{
    if(this.env.useMocks){
      logOut();
      return of(new HttpResponseObj(200, '', ''))
    }
    return this.http.get<IHttpResponse>(`${this.env.server}/logOut`);
  }
}
