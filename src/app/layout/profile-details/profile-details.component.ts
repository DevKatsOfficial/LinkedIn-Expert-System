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
  constructor(
  ) {}
  ngOnInit() {
  }

}
