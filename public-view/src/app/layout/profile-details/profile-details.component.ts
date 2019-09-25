import { Component, OnInit } from "@angular/core";
import { BackendapiService } from "../../service/backendapi.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-profile-details",
  templateUrl: "./profile-details.component.html",
  styleUrls: ["./profile-details.component.css"]
})
export class ProfileDetailsComponent implements OnInit {
  expert: [];
  experience: [];
  education: [];
  projects: [];
  publications: [];
  volunteer_experiences: [];
  certifications: [];
  skills: [];

  constructor(
    private tem: BackendapiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      if (param && param.keys.length > 0 && param.has("id")) {
        this.tem.getOne(param.get("id")).subscribe(res => {
          console.log(res.educations);
          this.expert = res;
          this.certifications = res.certifications;
          this.education = res.educations;
          this.experience = res.experiences;
          this.publications = res.publications;
          this.volunteer_experiences = res.volunteer_experiences;
          this.projects = res.projects;
          this.skills = res.skills;

          console.log(this.certifications);
        });
      } else {
        this.router.navigate(["/"]);
      }
    });
  }
}
