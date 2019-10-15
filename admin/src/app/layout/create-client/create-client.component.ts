import { AdminserviceService } from "./../../adminservice.service";
import {
  Component,
  ViewEncapsulation,
  OnInit,
  EventEmitter,
  Output,
  NgModule
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-create-client",
  templateUrl: "./create-client.component.html",
  styleUrls: ["./create-client.component.css"]
})
export class CreateClientComponent implements OnInit {
  constructor(
    private backend: AdminserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}
  createCleint(data) {
    console.log(data);
    this.backend.createClient(data).subscribe(res => {
      if (res) {
        alert(res);
        this.router.navigate(["/"]);
      }
    });
  }
}
