import { Component, OnInit, Input } from "@angular/core";
import { BackendapiService } from "../../service/backendapi.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "expert-short-profile",
  templateUrl: "./expert-short-profile.component.html",
  styleUrls: ["./expert-short-profile.component.css"]
})
export class ExpertShortProfileComponent implements OnInit {
  @Input() expertData: any;
  constructor() {

  }

  ngOnInit(){
    console.log(this.expertData);
  }

}
