import { Component } from '@angular/core';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApi } from '../../domain/auth.api';
import { Router } from '@angular/router';
import { LoginDto } from '../../domain/IUser';
import { Modal } from '../../components/modal/modal';

@Component({
  selector: 'app-login-page',
  imports: [Input, Button, ReactiveFormsModule, Modal],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  constructor(private api: AuthApi, private router: Router) {}

  protected isSubscribed: boolean = false;

  ngOnInit() {
    if(sessionStorage.getItem("token"))
      this.router.navigate(['Contacts']);
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  subscribeForm: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  get Username () {
    return this.loginForm.get("username");
  }

  get Password () {
    return this.loginForm.get("password");
  }


  formAction = () => {

  }

  login = () => {
    if(!this.loginForm.valid){
      alert("Campos inválidos");
      return;
    }
    const data: LoginDto = {
      password: this.Password?.value,
      username: this.Username?.value
    }
    this.api.login(data).subscribe(
      res => {
        console.log(res)
        sessionStorage.setItem("token", res);
    });
  }

  subscribe = () => {
    if(!this.subscribeForm.valid){
      alert("Campos inválidos");
      return;
    }
    const data: LoginDto = {
      password: this.Password?.value,
      username: this.Username?.value
    }
    this.api.susbcribe(data).subscribe();
  }

}
