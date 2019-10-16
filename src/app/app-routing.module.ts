import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/services/auth.guard";
import { AnonymousGuard } from "./core/services/anonymous.guard";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./layout/layout.module#LayoutModule",
    canActivate: [AuthGuard]
  },

  { path: "login", component: LoginComponent, canActivate: [AnonymousGuard] },
  {
    path: "register/:projectNumber",
    component: RegisterComponent,
    canActivate: [AnonymousGuard]
  },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
