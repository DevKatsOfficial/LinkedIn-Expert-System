import { Component, OnInit } from "@angular/core";
@Component({
  selector: "loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"]
})
export class LoadingComponent implements OnInit {
  private loader: any = [""];
  constructor(
  ) {}
  ngOnInit() {
    setInterval(()=>{
      this.loader.length < 3? this.loader.push(""): this.loader = [""];
    }, 500);
  }
}
