import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false
  public form: FormGroup = this.fb.group({
    login:['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]]
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
    return this.form.controls[name].value
  }

  public submitForm(): void{
    if(this.form.valid){
      console.log(this.form.value);
    }
  }

}
