import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public get token(): string {
    return localStorage.getItem('token');
  }

  public set token(v: string) {
    localStorage.setItem('token', v);
  }

  public deleteToken() {
    localStorage.removeItem('token');
  }

  constructor() { }
}
