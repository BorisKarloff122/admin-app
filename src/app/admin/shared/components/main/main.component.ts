import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../../shared/services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class AdminMainComponent implements OnInit {
  public dataSource = [];
  constructor() { }

  ngOnInit(): void {
  }

}
