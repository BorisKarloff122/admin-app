import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {switchMap, tap} from "rxjs";
import {IHttpResponse} from "../../models/httpResponse.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public showPassword: boolean = false;
  public errorMessage: string = '';
  public form: FormGroup = this.fb.group({
    login:['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    rememberMe: [false, []]
  })
  constructor(
    private fb: FormBuilder,
    private dataService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public toggleShow(): void{
    this.showPassword = !this.showPassword;
  }

  public controlGet(name: string): string{
    return this.form.controls[name].value
  }

  public submitForm(): void{
    if(this.form.valid){
      this.dataService.login(this.form.value).subscribe((res: IHttpResponse)=>{
        this.errorMessage = res.errorMessage;
        if(res.status === 200){
          this.router.navigate(['/admin']);
        }
        setTimeout(()=>{
          this.errorMessage = '';
        }, 2500)
      });
    }
  }

}
