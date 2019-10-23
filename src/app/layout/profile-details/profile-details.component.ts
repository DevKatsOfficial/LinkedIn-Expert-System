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
  private loader: boolean = false;
  private expertProfile: any = null;
  constructor(
    private route: ActivatedRoute,
    private backend: BackendapiService
  ) {}
  ngOnInit() {
    this.getProfile(this.route.snapshot.paramMap.get('id'));
  }

  getProfile(id: string) {
    this.loader = true;
    this.expertProfile = {};
    this.backend.expertDetail(id).subscribe(res => {
      this.loader = false;
      this.expertProfile = res;
      console.log(this.expertProfile);
    },err => {
      this.loader = false;
      this.expertProfile = null;
      alert("Error in server");
    });
  }

}
