import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "linkedin-profile",
  templateUrl: "./linkedin-profile.component.html",
  styleUrls: ["./linkedin-profile.component.css"]
})
export class LinkedinProfileComponent implements OnInit {
  @Input() expertData: any;
  constructor(private router: Router) {

  }

  ngOnInit(){
    //console.log(this.expertData);
  }

  getDuration = (dur: any) => {
    let str = "";
    let start = '';
    let end = '';
    if(!!dur){
      // start
      if(!!dur.start && !!dur.start.month){
        start += dur.start.month + ' ';
      }
      if(!!dur.start && !!dur.start.year){
        start += dur.start.year + " ";
      }

      // end
      if(!!dur.end && !!dur.end.month){
        end += dur.end.month + " ";
      }
      if(!!dur.end && !!dur.end.year){
        end += dur.end.year + " ";
      }

      str = !!end? start + 'To ' + end: start;
    }
    return str;
  }

}
