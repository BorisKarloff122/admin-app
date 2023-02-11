import { Component, OnInit } from '@angular/core';
import {HomeDataService} from "../../services/home-data.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public displayedColumns = [];
  public tableData = [];
  constructor(
    private homeService: HomeDataService
  ) { }

  ngOnInit(): void {

  }

}
