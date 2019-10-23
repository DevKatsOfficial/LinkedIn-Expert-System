import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { AuthService } from "../core/services/auth.service";
import { LocalStorageService } from "../core/services/local-storage.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private loader: boolean = true;
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {}
  loginUser(data) {
    console.log(data);
    this.authService.login(data).subscribe(res => {
      console.log(res);
      if (res.token) {
        this.localStorageService.token = res.token;
        this.router.navigate(["/"]);
      }
    });
  }
}
