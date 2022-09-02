import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import{FormControl, FormControlName, FormGroup, Validators }from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted: boolean = false;
  loginform= new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])

 })
  constructor() { }

  ngOnInit(): void {
  }
  loginuser(){
    this.submitted=!this.submitted;
    if(this.loginform.valid){
      console.log(this.loginform.value);
    }
  }
  get user(){
    return this.loginform.get('user')
  }
  get password(){
    return this.loginform.get('password')
  }

}
