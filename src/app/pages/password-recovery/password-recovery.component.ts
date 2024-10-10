import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-password-recovery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-recovery.component.html',
})
export class PasswordRecoveryComponent {
  email = '';
  successMessage = '';
  errorMessage = '';

  constructor(private authService: AuthService) {}

  recoverPassword() {
    if (this.authService.resetPassword(this.email)) {
      this.successMessage = 'Instruções para redefinir sua senha foram enviadas para o seu email.';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Email não encontrado.';
      this.successMessage = '';
    }
  }
}
