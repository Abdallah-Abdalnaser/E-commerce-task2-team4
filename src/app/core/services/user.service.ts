import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  getUserName(): string | null {
    const userData = localStorage.getItem('registeredUser');
    if (userData) {
      const user = JSON.parse(userData);
      return user.name; // Return the user's name
    }
    return null;
  }

  clearUserData() {
    localStorage.removeItem('registeredUser');
  }
}
