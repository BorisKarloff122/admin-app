import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../../../../shared/services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  @Output() public menuTrigger = new EventEmitter();
  public isOpened = false;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public toggleMenu(): void {
    this.isOpened = !this.isOpened;
    this.menuTrigger.emit();
  }

  public logOut(): void{
    this.loginService.logOut()
      .subscribe((res)=>{
      this.router.navigate(['control'])
    })
  }

}
