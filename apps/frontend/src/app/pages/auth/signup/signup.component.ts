import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../auth.service';
import {
  selectError,
  selectIsLoading,
  selectToken,
} from '../../../store/selectors';
import { Store } from '@ngrx/store';
import { AuthAction } from '../../../store/actions';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [AuthService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  public signupForm: FormGroup;

  public isLoading: boolean = false;
  public error: string | null = null;

  async ngOnInit() {
    this.store.select(selectError).subscribe((error) => (this.error = error));
    this.store
      .select(selectIsLoading)
      .subscribe((isLoading) => (this.isLoading = isLoading));
  }

  constructor(private fb: FormBuilder, private store: Store) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const { email, password, name } = this.signupForm.value;
    this.store.dispatch(AuthAction.signup({ name, email, password }));
  }
}
