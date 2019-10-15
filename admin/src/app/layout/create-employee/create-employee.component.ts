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
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  constructor(
    private backend: AdminserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  employeeUser(data) {
    console.log(data);
    this.backend.createEmployee(data).subscribe(res => {
      if (res) {
        alert(res);
        this.router.navigate(["/"]);
      }
    });
  }
}
