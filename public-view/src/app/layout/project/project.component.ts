import {
  Component,
  ViewEncapsulation,
  OnInit,
  EventEmitter,
  Output
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
  @Output() closeModalEvent = new EventEmitter<boolean>();
  closeResult: string;
  constructor(
    private backend: BackendapiService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}
  clientContacts: any = [];
  createProfile(data) {
    data.clientContacts = this.clientContacts;
    console.log(data);
    this.backend.createProject(data).subscribe(res => {
      if (res) {
        console.log(res);
      }
    });
  }
  ngOnInit() {}
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
}
