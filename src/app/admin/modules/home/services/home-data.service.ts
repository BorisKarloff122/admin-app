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



}
