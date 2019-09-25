import { NgModule, ViewChildren } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { HomeComponent } from "./home/home.component";
import { ProfileDetailsComponent } from "./profile-details/profile-details.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "home", loadChildren: "./home/home.module#HomeModule" },
      { path: "profile-details/:id", component: ProfileDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
