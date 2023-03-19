import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/classes/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  register(user: User) {
    return this.httpClient.post('http://localhost:3000/register', user);
  }

  login(email: string, password: string) {
    return this.httpClient.post('http://localhost:3000/login', {
      email,
      password,
    });
  }
}
