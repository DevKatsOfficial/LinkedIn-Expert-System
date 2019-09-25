import { Component, OnInit } from "@angular/core";
import { BackendapiService } from "../../service/backendapi.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private backend: BackendapiService) {}
  searchvalue: [];
  ngOnInit() {}
  searchExperts(data) {
    this.backend.expertSearch(data).subscribe(res => {
      this.searchvalue = res;
      console.log(this.searchvalue);
    });
  }
}
