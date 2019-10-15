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
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-create-project",
  templateUrl: "./create-project.component.html",
  styleUrls: ["./create-project.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class CreateProjectComponent implements OnInit {
  constructor(
    private backend: AdminserviceService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}

  clientContacts: any = [];
  clientId;
  employeeId;
  selectClientHandler(event: any) {
    //update the ui
    this.clientId = event.target.value;
  }
  selectemployeeHandler(event: any) {
    //update the ui
    this.employeeId = event.target.value;
  }
  createProfile(data) {
    data.clientContacts = this.clientContacts;
    data.clientId = this.clientId;
    data.employeeId = this.employeeId;
    console.log(data);
    this.backend.createProject(data).subscribe(res => {
      if (res) {
        console.log(res);
      }
    });
  }
  ngOnInit() {
    this.getClient();
    this.getEmployees();
  }
  createContact(content) {
    this.modalService.open(content, {
      backdropClass: "light-blue-backdrop",
      centered: true
    });
  }

  saveInfocontact(data) {
    console.log(data);
    this.clientContacts.push(data);
  }
  clientsName: any = [];
  getClient() {
    this.backend.getAllclient().subscribe(res => {
      // console.log(res);
      this.clientsName = res;
      console.log(this.clientsName);
    });
  }
  employees: any = [];
  getEmployees() {
    this.backend.getAllemployee().subscribe(res => {
      // console.log(res);
      this.employees = res;
      console.log(this.employees);
    });
  }
}
