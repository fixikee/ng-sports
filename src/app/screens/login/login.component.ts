import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILogin} from '../../dtos';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public data: ILogin;
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
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      }
    );
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.data = {
        email: this.form.get('email').value,
        password: this.form.get('password').value,
      };
      console.log(this.data);

      this.auth.login(this.data)
        .then(res => {
          if (res) {
            this.router.navigate(['news']);
          }
        });
    } else {
      alert('invalid form');
    }
  }
}
