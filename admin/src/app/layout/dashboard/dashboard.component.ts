import { AdminserviceService } from "./../../adminservice.service";
import {
  Component,
  ViewEncapsulation,
  OnInit,
  EventEmitter,
  Output,
  NgModule
} from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(
    private backend: AdminserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getEmployees();
    this.getClient();
    this.getPro();
  }

  employees: any = [];
  getEmployees() {
    this.backend.getAllemployee().subscribe(res => {
      // console.log(res);
      this.employees = res;
      console.log(this.employees);
    });
  }
  clientsName: any = [];

  getClient() {
    this.backend.getAllclient().subscribe(res => {
      // console.log(res);
      this.clientsName = res;
      console.log(this.clientsName);
    });
  }
  Projects: any = [];
  getPro() {
    console.log("enter here");
    this.backend.getAllProjects().subscribe(res => {
      console.log(res);
      this.Projects = res;
      console.log(this.Projects);
    });
  }
}
