import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public showPassword: boolean = false
  public form: FormGroup = this.fb.group({
    login:['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    rememberMe: [false]
  })
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public toggleShow(): void{
    this.showPassword = !this.showPassword;
  }

  public controlGet(name: string): string{
    console.log(name);
    return this.form.controls[name].value
  }

  public submitForm(): void{
    if(this.form.valid){
      console.log(this.form.value);
    }
  }

}
