import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IRegister} from '../../dtos';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
// import { MatSnackBar } from '@angular/material';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public data: IRegister;
  public hide = true;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
        displayName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.data = {
        displayName: this.form.get('displayName').value,
        email: this.form.get('email').value,
        password: this.form.get('password').value,
      };

      this.auth.register(this.data)
        .subscribe(res => {
          this.auth.setCurrentUser(res);
          this.router.navigate(['news']);
        }, error => console.log('Login -> onSubmit', error));
    } else {
      alert('invalid form');
    }
  }
}
