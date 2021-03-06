import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', [Validators.required, this.passwordMatch]],
      role: [''],
    });
  }


  passwordMatch(control: FormControl) {
    const password = control.root.get('password');
    return password && control.value !== password.value ? {passwordMismatch: true } : null;
  }

  restartForm() {
    this.form = this.buildForm();
  }
}
