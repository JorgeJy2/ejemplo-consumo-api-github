import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
