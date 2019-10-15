import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit() {}
  logout() {
    if (confirm("Are you sure to logout?")) {
      this.authService.logout();
    }
  }
}
