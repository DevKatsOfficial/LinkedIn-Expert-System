import { Component, OnInit, ViewEncapsulation, NgZone } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
// import { BackendapiService } from "../../../service/backendapi.service";
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  // submitted: false;
  // userForm: FormGroup;

  closeResult: string;
  constructor(
    private modalService: NgbModal // private api: BackendapiService, // public fb: FormBuilder, // private router: Router, // private ngZone: NgZone
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

  // onSubmit() {
  //   this.submitted;
  //   if (!this.userForm.valid) {
  //     return false;
  //   } else {
  //     this.api.registerUser(this.userForm.value).subscribe(
  //       res => {
  //         console.log("Employee successfully created!");
  //         this.ngZone.run(() => this.router.navigateByUrl("/employees-list"));
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // }
}
