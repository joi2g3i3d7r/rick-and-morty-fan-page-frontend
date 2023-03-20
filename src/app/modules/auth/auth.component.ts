import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.userService
      .login(this.f['email'].value, this.f['password'].value)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error(error);

          alert(
            'Error al iniciar sesión. Por favor verifica tus credenciales.'
          );
        },
      });
  }
}
