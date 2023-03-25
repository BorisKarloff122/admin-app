import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";
import {dataGetter, getAllTables} from "../../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private env = environment
  constructor(private http: HttpClient) { }

  public getTableData(tableName?: string): Observable<any[]>{
    if(this.env.useMocks){
      if(tableName){
        return of(dataGetter(tableName));
      }
        return of(getAllTables());
    }

    if(tableName){
      return this.http.get<any>(`${this.env.server}/${tableName}`)
    }
    return this.http.get<any>(`${this.env.server}/tables`)

  }

}
