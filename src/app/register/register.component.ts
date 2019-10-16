import { Component, OnInit } from "@angular/core";
import { AuthService } from "../core/services/auth.service";
import { LocalStorageService } from "../core/services/local-storage.service";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { BackendapiService } from "../service/backendapi.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private backend: BackendapiService
  ) {}
  snapshotParam;
  subscribedParam;

  ngOnInit() {
    this.snapshotParam = this.route.snapshot.paramMap.get("projectNumber");
    this.route.paramMap.subscribe(params => {
      this.subscribedParam = params.get("projectNumber");
      console.log(this.subscribedParam);
    });
  }

  registerUser(data) {
    console.log(data);
    this.authService.verfiyProject(data).subscribe(res => {
      console.log(res);
      if (res.found === true) {
        this.authService.register(data).subscribe(res => {
          if (res) {
            alert(res);
            this.router.navigate(["/login"]);
          }
        });
      } else {
        this.router.navigate(["/404"]);
      }
    });
  }

  consoleVal(val: any) {
    console.log(val);
  }
}
