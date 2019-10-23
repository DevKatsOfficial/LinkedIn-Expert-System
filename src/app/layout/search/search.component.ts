import { Component, OnInit } from "@angular/core";
import { BackendapiService } from "../../service/backendapi.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {

  private loader: boolean = false;
  private noExperts: boolean = false;
  private searchBtn: boolean = true;
  private searchvalue:any = [];
  private countries: any = [];
  private regions: any = [];

  constructor(
    private backend: BackendapiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit() {
    this.getAllCountries();
  }
  getAllCountries(): void {
    this.loader = true;
    this.backend.getAllCountries().subscribe(res => {
      this.countries = this.filterCountries(res);
      this.getAllRegions();
    },err => {
      this.loader = false;
      alert("Error in server, please refresh");
    });
  }

  getAllRegions(): void {
    this.backend.getAllRegions().subscribe(res => {
      this.loader = false;
      this.regions = this.filterRegion(res);
    },err => {
      this.loader = false;
      alert("Error in server");
    });
  }

  searchExperts(data: any) {
    this.loader = true;
    this.searchvalue = [];
    this.backend.expertSearch(data).subscribe(res => {
      this.loader = this.searchBtn = this.noExperts = false;
      this.searchvalue = res;
      if(res.length === 0){
        alert("No Expert Found");
        this.noExperts = true
      }
    },err => {
      this.loader = false;
      switch(err.status){
        case 400: alert("No Expert Found"); this.noExperts = true; break;
        case 401: alert("Invalid/Expired Token"); break;
        default: alert("Error in server");
      }
    });
  }

  filterCountries(data: any){
    let countries: any = [];
    for(let i=0; i<data.length; i++){
      countries.push(data[i].name);
    }
    return countries;
  }

  filterRegion(data: any){
    let region: any = [];
    for(let i=0; i<data.length; i++){
      region.push(data[i].region);
    }
    return region.filter(this.onlyUnique);
  }

  onlyUnique(value: any, index: any, self: any) {
    return self.indexOf(value) === index;
  }
}
