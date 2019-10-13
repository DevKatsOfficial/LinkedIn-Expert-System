import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  {
    path: "",
    component: AdminComponent
  }
];
@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AdminModule {}
