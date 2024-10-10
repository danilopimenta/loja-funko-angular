import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';
import {User} from "../../model/user.model";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'As senhas não coincidem.';
      return;
    }
    const user: User = {
      id: 0,
      name: this.name,
      email: this.email,
      password: this.password,
    };
    if (this.authService.register(user)) {
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Usuário já cadastrado.';
    }
  }
}
