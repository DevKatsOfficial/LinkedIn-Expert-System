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
  constructor(
    private backend: BackendapiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

  }

}
