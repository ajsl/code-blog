import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(values: Login): any {
    return this.http.post(this.baseUrl + 'auth/login', values).pipe(
      map((token: any) => {
        console.log(token);
        if (token) {
          localStorage.setItem('token', token.token);
        }
      })
    );
  }

  checkUserIsAuthorised(): any {
    const authToken = {
      token: localStorage.getItem('token'),
    };
    console.log(authToken);

    console.log('token not null');
    const response = this.http.post(this.baseUrl + 'auth/checkuser', authToken);

    console.log(...response + ' response');

    return response;

  }
}
