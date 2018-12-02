import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILogin, IUser} from '../../dtos';
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
  ) {
  }

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

      this.auth.login(this.data)
        .subscribe((user: IUser) => {
          this.auth.setCurrentUser(user);
          this.router.navigate(['news']);
        }, error => console.log('Login -> onSubmit', error));
    } else {
      alert('invalid form');
    }
  }
}

// logout: gomb, az auth service logout metódusát meghívja, a logout current user = null. Ahol a gomb handlere van, oda controlerbe auth service, vissza a kezdő oldalra
