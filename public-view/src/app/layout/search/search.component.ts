import { Component, OnInit } from "@angular/core";
import { BackendapiService } from "../../service/backendapi.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor(
    private backend: BackendapiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  searchvalue: [];
  ngOnInit() {}
  searchExperts(data) {
    this.backend.expertSearch(data).subscribe(res => {
      this.searchvalue = res;
      console.log(this.searchvalue);
    });
  }
}
