import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/services/auth.guard";
import { AnonymousGuard } from "./core/services/anonymous.guard";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
const routes: Routes = [
  {
    path: "",
    loadChildren: "./layout/layout.module#LayoutModule",
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent, canActivate: [AnonymousGuard] },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AnonymousGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
