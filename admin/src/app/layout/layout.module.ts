import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LayoutComponent } from "./layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { CreateClientComponent } from "./create-client/create-client.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
@NgModule({
  declarations: [
    SidebarComponent,
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    CreateProjectComponent,
    CreateClientComponent,
    CreateEmployeeComponent
  ],
  imports: [CommonModule, LayoutRoutingModule, FormsModule, NgbModule]
})
export class LayoutModule {}
