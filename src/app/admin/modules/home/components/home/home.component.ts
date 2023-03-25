import { Component, OnInit } from '@angular/core';
import {HomeDataService} from "../../services/home-data.service";
import {ITableOptions} from "../../../../models/tableOptions";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public options: ITableOptions = {
    paginate: false
  }
  constructor(

  ) { }

  ngOnInit(): void {
  }




}
