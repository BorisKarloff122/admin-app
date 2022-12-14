import {Component, OnInit} from '@angular/core';
import {fillSessionStorage} from "./utils/utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'admin-app';

  ngOnInit() {
    fillSessionStorage();
  }
}
