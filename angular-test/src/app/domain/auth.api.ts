import { Injectable } from '@angular/core';
import { Api } from './api';
import { LoginDto } from './IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApi extends Api {
  login = (data: LoginDto) : Observable<string> => {
    return this.client.post<string>(`${this.URL}/auth/login`, data).pipe();
  }

  susbcribe = (data: LoginDto) : Observable<void> => {
    return this.client.post<void>(`${this.URL}/auth/subscribe`, data).pipe();
  }
}
