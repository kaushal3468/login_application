import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import{FormControl, FormGroup, Validators }from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  submitted: boolean = false;
  loginform= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])

 })
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true;
  }
loginuser(){
  this.submitted=!this.submitted;
  if(this.loginform.valid){
    console.log(this.loginform.value);
  }
}
get email(){
  return this.loginform.get('email')
}
get password(){
  return this.loginform.get('password')
}
}
