import { BackendapiService } from "../../service/backendapi.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, ViewEncapsulation, OnInit } from "@angular/core";

const projects = [
  {
    "_id": "5da31494ea4fe2248865008f",
    "employeeId": {
        "_id": "5da0ef84d0eb9d13acce5c92",
        "name": "zubair",
        "email": "zubairsaif@gmail.com",
        "__v": 0
    },
    "experts": [
        {
            "_id": "5da31494ea4fe22488650090",
            "expertId": "5d8a91949e470a24404d2d9e"
        }
    ],
    "projectId": {
        "createdAt": "2019-10-12T21:39:59.671Z",
        "_id": "5da314812769ff18544e0e94",
        "projectName": "test project",
        "projectCode": " testcode",
        "projectNumber": "wde123",
        "projectOwner": "xzxxzzx",
        "projectteam": " canda",
        "clientId": "5da1a19a0334311b24a44836",
        "employeeId": "5da0ef84d0eb9d13acce5c92",
        "clientContacts": [
            {
                "_id": "5da25108850e0e210c9fae9d",
                "name": "zubair saif",
                "email": "zubairsaif@yandex.com"
            }
        ],
        "projectStatus": true,
        "__v": 0
    },
    "__v": 0
  },{
      "_id": "5da393e8f6b725278c5571db",
      "employeeId": {
          "_id": "5da0ef84d0eb9d13acce5c92",
          "name": "zubair",
          "email": "zubairsaif@gmail.com",
          "__v": 0
      },
      "experts": [
          {
              "_id": "5da393e8f6b725278c5571dc",
              "expertId": "5d8a91949e470a24404d2d9e"
          }
      ],
      "projectId": {
          "createdAt": "2019-10-13T20:06:35.135Z",
          "_id": "5da38a67ce9f5635104c2ad7",
          "projectName": "Air share",
          "projectCode": "131362ZK",
          "projectNumber": "131362",
          "projectOwner": "Zubair saif",
          "projectteam": "Pakistan",
          "clientId": "5da1a17a0334311b24a44832",
          "employeeId": "5da0ef84d0eb9d13acce5c92",
          "description": "This project for document sharing",
          "clientContacts": [],
          "projectStatus": true,
          "__v": 0
      },
      "__v": 0
  }
];

const empPrjects = [
  {
      "createdAt": "2019-10-18T11:59:41.668Z",
      "_id": "5da9acf852c7b4197077943d",
      "projectName": "hnb",
      "projectCode": "123Abc",
      "projectNumber": "147sa",
      "projectOwner": "zubair",
      "projectteam": "east",
      "clientId": "5da1a17a0334311b24a44832",
      "employeeId": "5da9919847d96214e0708560",
      "description": "This is description",
      "clientContacts": [
          {
              "_id": "5da9acf852c7b4197077943e",
              "email": "zubair@gmail.com",
              "name": "zubair"
          }
      ],
      "projectStatus": true,
      "__v": 0
  },
  {
      "createdAt": "2019-10-18T12:16:11.249Z",
      "_id": "5da9ad744650fc39c458c888",
      "projectName": "hnb000",
      "projectCode": "123Abc00",
      "projectNumber": "147sa00",
      "projectOwner": "zubair00",
      "projectteam": "east00",
      "clientId": "5da1a17a0334311b24a44832",
      "employeeId": "5da9919847d96214e0708560",
      "description": "This is description",
      "clientContacts": [
          {
              "_id": "5da9ad744650fc39c458c889",
              "email": "zubair@gmail.com",
              "name": "zubair"
          }
      ],
      "projectStatus": true,
      "__v": 0
  }
];
@Component({
  selector: "app-profile-details",
  templateUrl: "./profile-details.component.html",
  styleUrls: ["./profile-details.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ProfileDetailsComponent implements OnInit {
  private loader: boolean = false;
  private expertProfileError: boolean = false;
  private expertProfile: any = null;
  private employeeProjects: any = [];
  private projectList: any = [];
  private modalOpen: boolean = false;
  private claimProject: any = {
    projectId:"",
    experts: {
      expertId: ""
    }
  };
  constructor(
    private route: ActivatedRoute,
    private backend: BackendapiService
  ) {}
  ngOnInit() {
    this.getProfile(this.route.snapshot.paramMap.get('id'));
  }

  getProfile = (id: string) => {
    this.loader = true;
    this.expertProfileError = false;
    this.expertProfile = null;
    this.backend.expertDetail(id).subscribe(res => {
      this.expertProfile = res;
      this.getProjectsByExpert(res._id);
    },err => {
      this.loader = false;
      this.expertProfileError = true;
      alert("Server error in getting profile detail");
    });
  }

  getProjectsByExpert = (id: string) => {
    this.claimProject.experts.expertId = id;
    this.projectList = [];
    this.backend.projectsByExpert(id).subscribe(res => {
      this.loader = this.expertProfileError = false;
      if(!!res.message){
        //this.projectList = [];
        this.projectList = projects;
      }else{
        this.projectList = res;
      }
      console.log(this.projectList);
    },err => {
      this.loader = false;
      this.expertProfileError = true;
      alert("Server error in getting expert projects");
    });
  }

  getProjectByEmployee = () => {
    this.loader = true;
    this.employeeProjects = [];
    this.backend.projectsByEmployee().subscribe(res => {
      this.loader = false;
      this.employeeProjects = res;
      console.log(this.employeeProjects);
      this.updateModal(true);
    },err => {
      this.loader = false;
      if(err.status == 400){
        //this.projectList = [];
        this.employeeProjects = empPrjects;
        this.updateModal(true);
      }else{
        alert("Server error in getting employee projects");
      }
    });
  }

  updateModal = (value: boolean) => {
    this.modalOpen = value;
  }

  claimForm = (data: any) => {
    console.log(data);
    this.getProjectByEmployee();
  }

  onClickProject = (id:string) => {
    this.claimProject.projectId = id;
  }

  submitClaim = () => {
    this.updateModal(false);
    console.log(this.claimProject);
  }

}
