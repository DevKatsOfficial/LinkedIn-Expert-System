import { CustomprofileService } from "./customprofile.service";
import { Component, OnInit } from "@angular/core";
import { IDropdownSettings } from "ng-multiselect-dropdown";

@Component({
  selector: "app-custom-profile",
  templateUrl: "./custom-profile.component.html",
  styleUrls: ["./custom-profile.component.css"]
})
export class CustomProfileComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  projectList = [];
  dropdownSettings = {};
  constructor(private profservice: CustomprofileService) {}
  ngOnInit() {
    this.dropdownList = [
      { projectid: 1, item_text: "Mumbai" },
      { projectid: 2, item_text: "Bangaluru" },
      { projectid: 3, item_text: "Pune" },
      { projectid: 4, item_text: "Navsari" },
      { projectid: 5, item_text: "New Delhi" }
    ];
    this.projectList = [
      { item_id: 1, item_text: "Mumbai" },
      { item_id: 2, item_text: "Bangaluru" },
      { item_id: 3, item_text: "Pune" },
      { item_id: 4, item_text: "Navsari" },
      { item_id: 5, item_text: "New Delhi" }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "Unselect All",
      itemsShowLimit: 3,
      allowSeachFilter: true
    };
    this.dropdownSettings = {
      singleSelection: false,
      idField: "projectid",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "Unselect All",
      itemsShowLimit: 3,
      allowSeachFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  experts: [];
  educations: [];
  getprofileCustom(id) {
    this.profservice.getProfile(id).subscribe(res => {
      console.log(res);
      this.experts = res;
      this.educations = res.education;
      console.log(this.educations);
    });
  }
}
