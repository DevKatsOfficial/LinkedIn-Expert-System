import {
  Component,
  ViewEncapsulation,
  OnInit,
  EventEmitter,
  Output,
  NgModule
} from "@angular/core";
import { BackendapiService } from "../../service/backendapi.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {
  closeResult: string;
  constructor(
    private backend: BackendapiService,
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
  project: any = [];
  snapshotParam;
  subscribedParam;
  ngOnInit() {
    this.snapshotParam = this.route.snapshot.paramMap.get("id");
    this.route.paramMap.subscribe(params => {
      this.subscribedParam = params.get("id");
    });
    this.route.paramMap.subscribe(param => {
      if (param && param.keys.length > 0 && param.has("id")) {
        this.backend.getProjectss(param.get("id")).subscribe(res => {
          console.log(res);
          this.project = res;
        });
      } else {
        this.router.navigate(["/"]);
      }
      // this.getExpertByProject();
    });
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
  // getClient() {
  //   this.backend.getAllclient().subscribe(res => {
  //     // console.log(res);
  //     this.clientsName = res;
  //     console.log(this.clientsName);
  //   });
  // }
  //for getExpertByProject
  experts: any = [];
  introduction: [];
  CreateProfile(contents) {
    this.modalService.open(contents, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg"
    });

    this.backend
      .getExpertByProjects({ projectId: this.subscribedParam })
      .subscribe(res => {
        this.experts = res.experts;
        this.introduction = res.introduction;
        console.log(this.experts);
      });
  }

  getprojectByexpert(data) {
    this.backend.getProjectByExpert(data).subscribe(res => {
      // console.log(res);
      this.clientsName = res;
      console.log(this.clientsName);
    });
  }
  Project: any = [];
  projectlist: any = [];
  projectNumber;
  selectprojectnumber(event: any) {
    //update the ui

    this.projectNumber = event.target.value;
  }
  InviteExpertPop(invite, data) {
    this.modalService.open(invite, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg"
    });
    this.backend.GetprojectEmployee().subscribe(res => {
      this.projectlist = res;
      console.log(this.projectlist);
    });
  }
  invitionexpert(data) {
    console.log(data);
    this.backend.inviteExpert(data).subscribe(res => {
      console.log(res);
      if (res) {
        alert(res);
        this.router.navigate(["/"]);
      }
    });
  }

  getOneProject() {}
}
