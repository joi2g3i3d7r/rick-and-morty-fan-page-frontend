import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/classes/user';
import { Environment } from '@app/environment/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private jwtHelper = new JwtHelperService();

  constructor(private httpClient: HttpClient) {}

  register(user: User) {
    return this.httpClient.post(
      `${Environment.API_BACKEND}/api/register`,
      user
    );
  }

  login(email: string, password: string) {
    return this.httpClient
      .post(`${Environment.API_BACKEND}/api/login`, {
        email,
        password,
      })
      .pipe(
        tap((data: any) => {
          localStorage.setItem('access-token', data.accessToken);
        })
      );
  }

  logout() {
    localStorage.removeItem('access-token');
  }

  validateToken(): boolean {
    try {
      const token = localStorage.getItem('access-token');

      if (!token) {
        return false;
      }

      const isExpired = this.jwtHelper.isTokenExpired(token);

      return !isExpired;
    } catch (error) {
      return false;
    }
  }

  getUserInfo() {
    try {
      const token = localStorage.getItem('access-token');

      if (!token) {
        return null;
      }

      const payload = this.jwtHelper.decodeToken(token);
      const userInfo = payload.claims;

      return userInfo;
    } catch (error) {
      return null;
    }
  }
}
