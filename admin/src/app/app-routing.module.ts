import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./core/services/auth.guard";
import { AnonymousGuard } from "./core/services/anonymous.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./layout/layout.module#LayoutModule",
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AnonymousGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
