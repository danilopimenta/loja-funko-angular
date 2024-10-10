import { Injectable } from '@angular/core';
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  register(user: User): boolean {
    const exists = this.users.find((u) => u.email === user.email);
    if (exists) {
      return false;
    }
    user.id = new Date().getTime();
    this.users.push(user);
    this.saveUsers();
    return true;
  }

  login(email: string, password: string): boolean {
    const user = this.users.find((u) => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  resetPassword(email: string): boolean {
    const user = this.users.find((u) => u.email === email);
    if (user) {
      return true;
    }
    return false;
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
