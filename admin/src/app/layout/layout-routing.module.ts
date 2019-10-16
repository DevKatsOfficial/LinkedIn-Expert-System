import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { CreateClientComponent } from "./create-client/create-client.component";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LayoutComponent } from "./layout.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../core/services/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,

    children: [
      { path: "", component: DashboardComponent },

      {
        path: "dashboard",
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "createproject",
        component: CreateProjectComponent
      },
      {
        path: "createclient",
        component: CreateClientComponent
      },
      {
        path: "createemployee",
        component: CreateEmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
