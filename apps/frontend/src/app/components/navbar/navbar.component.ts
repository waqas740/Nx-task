import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { AuthAction } from '../../store/actions';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private store: Store) {}

  logoutBtnClick() {
    this.store.dispatch(AuthAction.logout());
  }
}
