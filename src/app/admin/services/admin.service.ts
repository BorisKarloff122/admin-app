import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {IUser} from "../models/user";
import {IGallery} from "../models/gallery";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private env = environment;
  constructor(
    private http: HttpClient
  ) { }

  public getUser(): Observable<IUser[]>{
    return this.http.get<IUser[]>(`${this.env.server}/users`)
  }

  public getUserById(id: number): Observable<IUser>{
    return this.http.get<IUser>(`${this.env.server}/users?id=${id}`)
  }

  public galList(): Observable<IGallery[]>{
    return this.http.get<IGallery[]>(`${this.env.server}/galleries`);
  }

  public getGalleryById(id: number): Observable<IGallery>{
    return this.http.get<IGallery>(`${this.env.server}/galleries?id=${id}`);
  }

  public usersList(): Observable<IUser>{
    return this.http.get<IUser>(``)
  }
}
