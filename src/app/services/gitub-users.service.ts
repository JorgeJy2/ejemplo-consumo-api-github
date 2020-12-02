import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})

export class GitubUsersService {

  readonly PATH_API_GITHUB: string  = 'https://api.github.com/';

  constructor(private http: HttpClient) {
  }

  getInfoUser(userName: string) {
    return this.http.get(this.PATH_API_GITHUB + 'users/'+ userName);
  }
  
  login(loginInfo: LoginModel) {
    return this.http.post(this.PATH_API_GITHUB + 'users/', loginInfo);
  }
}
