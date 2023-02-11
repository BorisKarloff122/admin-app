import {Component, OnInit} from '@angular/core';
import {fillSessionStorage} from "./utils/utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'admin-app';

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    fillSessionStorage();
  }
}
