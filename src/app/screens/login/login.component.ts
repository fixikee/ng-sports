import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

// import { ILogin} from '../../dtos/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private showEmailErrorIcon: boolean;
  // login = new ILogin();

/*
  LoginDto loginDto;
*/

  constructor() {

  }
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  emailInputFocusedOut = false;

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  // shows error icon only after first focus out (and if input is invalid)
  focusOutFunction() {
    console.log('Focus Out');
    this.emailInputFocusedOut = true;
  }

}
