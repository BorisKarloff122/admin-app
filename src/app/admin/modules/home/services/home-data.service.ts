import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {getAllTables} from "../../../../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  private env = environment
  constructor(
    private http: HttpClient
  ) { }

  public getAllTables(): Observable<any>{
    if(this.env.useMocks){
      return of(getAllTables());
    }
    return this.http.get<any>(`${this.env.server}/tables`)
  }

}
