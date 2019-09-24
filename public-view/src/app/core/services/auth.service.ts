import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from "@angular/common/http";

import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  jwthelper = new JwtHelperService();

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {}

  get isLoggedIn() {
    const token = this.localStorageService.token;

    if (!token) {
      return false;
    }

    const isExpired = this.jwthelper.isTokenExpired(token);
    return !isExpired;
  }

  get currentUser() {
    const token = this.localStorageService.token;

    if (!token) {
      return null;
    }

    return this.jwthelper.decodeToken(token);
  }

  login(user: any): Observable<any> {
    if (user.email != "" && user.password != "") {
      return this.http.post("http://localhost:5000/api/user/login", user);
    }
  }

  register(user: any): Observable<any> {
    console.log(user);
    if (user.email != "" && user.password != "") {
      return this.http.post("http://localhost:5000/api/user/register", user);
    }
  }

  logout() {
    this.localStorageService.deleteToken();
    this.router.navigate(["/login"]);
  }
}
