import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@app/classes/user';
import { ApiService } from '@app/services/api.service';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  createAccountForm: FormGroup = this.formBuilder.group(
    {
      fullname: ['', Validators.required],
      nickname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: this.passwordMatchValidator,
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  get f() {
    return this.createAccountForm.controls;
  }

  onSubmit() {
    if (this.createAccountForm.invalid) {
      return;
    }

    const user = new User();
    user.fullname = this.f['fullname'].value;
    user.nickname = this.f['nickname'].value;
    user.email = this.f['email'].value;
    user.password = this.f['password'].value;

    this.apiService.register(user).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
