import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
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
      const url = `${environment.baseUrl}/admin/login`;
      return this.http.post(url, user);
    }
  }

  register(user: any): Observable<any> {
    console.log(user);
    if (user.email != "" && user.password != "") {
      const url = `${environment.baseUrl}/user/register`;
      return this.http.post(url, user);
    }
  }
  verfiyProject(data): Observable<any> {
    const url = `${environment.baseUrl}/user/register/`;
    return this.http.get(url + data.projectNumber);
  }
  logout() {
    this.localStorageService.deleteToken();
    this.router.navigate(["/login"]);
  }
}
