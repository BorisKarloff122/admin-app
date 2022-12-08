import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable, of} from "rxjs";
import {IUser} from "../models/user";
import {IGallery} from "../models/gallery";
import {dataGetter, dataGetterSingleEntity} from "../../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private env = environment;

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<IUser[]>{
    if(this.env.useMocks){
      return of(dataGetter('users'));
    }
    return this.http.get<IUser[]>(`${this.env.server}/users`)
  }

  public getUserById(id: number): Observable<IUser>{
    if(this.env.useMocks){
      return of(dataGetterSingleEntity('users', id))
    }
    return this.http.get<IUser>(`${this.env.server}/users?id=${id}`)
  }

  public saveUser(id:number, data: IUser): Observable<IUser>{
    return this.http.post<IUser>(`${this.env.server}/users?id=${id}`, data)
  }

  public galList(): Observable<IGallery[]>{
    if(this.env.useMocks){
      return of(dataGetter('galleries'))
    }
    return this.http.get<IGallery[]>(`${this.env.server}/galleries`);
  }

  public getGalleryById(id: number): Observable<IGallery>{
    if(this.env.useMocks){
      return of(dataGetterSingleEntity('galleries', id))
    }
    return this.http.get<IGallery>(`${this.env.server}/galleries?id=${id}`);
  }

}
