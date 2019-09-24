import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Input() currentUser: any;

  closeResult: string;
  constructor(
    private modalService: NgbModal,
    private authService: AuthService
  ) {
    // this.mainFrom();
  }

  ngOnInit() {}
  loginModal(content) {
    this.modalService.open(content, {
      backdropClass: "light-blue-backdrop",
      size: "lg",
      centered: true
    });
  }

  signModal(signup) {
    this.modalService.open(signup, {
      backdropClass: "light-blue-backdrop",
      size: "lg",
      centered: true
    });
  }

  logout() {
    if (confirm("Are you sure to logout?")) {
      this.authService.logout();
    }
  }
}
