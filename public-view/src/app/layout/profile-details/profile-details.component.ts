import { BackendapiService } from "../../service/backendapi.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-profile-details",
  templateUrl: "./profile-details.component.html",
  styleUrls: ["./profile-details.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ProfileDetailsComponent implements OnInit {
  closeResult: string;
  expert: {};
  experiences: [];
  educations: [];
  projects: [];
  publications: [];
  volunteer_experiences: [];
  certifications: [];
  skills: [];
  // introduction: {};
  constructor(
    private tem: BackendapiService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}
  snapshotParam;
  subscribedParam;
  ngOnInit() {
    this.snapshotParam = this.route.snapshot.paramMap.get("id");
    this.route.paramMap.subscribe(params => {
      this.subscribedParam = params.get("id");
    });
    this.route.paramMap.subscribe(param => {
      if (param && param.keys.length > 0 && param.has("id")) {
        this.tem.getOne(param.get("id")).subscribe(res => {
          this.expert = res;
          console.log(this.certifications);
          this.certifications = res.certifications;
          this.educations = res.educations;
          this.experiences = res.experiences;
          this.publications = res.publications;
          this.volunteer_experiences = res.volunteer_experiences;
          this.projects = res.projects;
          this.skills = res.skills;

          // this.introduction = res.introduction;
        });
      } else {
        this.router.navigate(["/"]);
      }
      this.getProjectByExperts();
    });
  }
  clamExpertPop(content) {
    this.tem.GetprojectEmployee().subscribe(res => {
      this.Getemployee = res;
      console.log(res);
    });
    this.modalService.open(content, {
      backdropClass: "light-blue-backdrop",
      centered: true
    });
  }
  Getemployee: any = [];

  projectClaim(data) {
    data.experts = [{ expertId: this.subscribedParam }];
    console.log(data);
    this.tem.ProjectClaim(data).subscribe(res => {
      console.log(res);
      if (res) {
        this.getProjectByExperts();
      }
    });
  }
  Project: any = [];
  getProjectByExperts() {
    this.tem
      .getProjectByExpert({ expertId: this.subscribedParam })
      .subscribe(res => {
        this.Project = res;
        console.log(this.Project);
      });
  }
  currentJustify = "fill";
}
