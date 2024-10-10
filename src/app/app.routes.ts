import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {PasswordRecoveryComponent} from "./pages/password-recovery/password-recovery.component";
import {AuthGuard} from "./guards/auth.guard";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produto/:id', component: ProductDetailsComponent },
  { path: 'carrinho', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: RegisterComponent,  },
  { path: 'recuperar-senha', component: PasswordRecoveryComponent },
];
