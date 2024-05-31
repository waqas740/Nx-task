import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AuthAction } from '../../../store/actions';
import { MessagesModule } from 'primeng/messages';
import {
  selectError,
  selectIsLoading,
  selectToken,
} from '../../../store/selectors';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    MessagesModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [AuthService],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SignInComponent {
  public signinForm: FormGroup;

  public isLoading: boolean = false;
  public error: string | null = null;
  public messages: Message[] = [];

  async ngOnInit() {
    this.store.select(selectError).subscribe((error) => {
      if (error) {
        this.messages = [{ severity: 'error', detail: error }];
      }
      this.error = error;
    });
    this.store
      .select(selectIsLoading)
      .subscribe((isLoading) => (this.isLoading = isLoading));
  }

  constructor(private fb: FormBuilder, private store: Store) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const { email, password } = this.signinForm.value;
    this.store.dispatch(AuthAction.login({ email, password }));
  }
}
