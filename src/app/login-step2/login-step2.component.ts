import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../login-service.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-step2',
  templateUrl: './login-step2.component.html',
  styleUrls: ['./login-step2.component.css']
})
export class LoginStep2Component implements OnInit {
  password = new FormControl();
  constructor(private loginService : LoginServiceService,
              private router: Router
              ) { }

  ngOnInit(): void {
  }
  username = this.loginService.loginData.username;
  login(){

  }
}
