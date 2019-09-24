import { Component, OnInit } from "@angular/core";
import { AuthService } from "../core/services/auth.service";
import { LocalStorageService } from "../core/services/local-storage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {}

  registerUser(data) {
    this.authService.register(data).subscribe(res => {
      if (res) {
        alert(res);
        this.router.navigate(["/login"]);
      }
    });
  }

  consoleVal(val: any) {
    console.log(val);
  }
}
