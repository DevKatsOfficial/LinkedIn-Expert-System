import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { ProfileDetailsComponent } from "./profile-details/profile-details.component";
import { ProjectComponent } from './project/project.component';
import { AllCallsComponent } from './all-calls/all-calls.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileDetailsComponent,
    ProjectComponent,
    AllCallsComponent,
    ClientComponent
  ],
  imports: [CommonModule, LayoutRoutingModule, FormsModule]
})
export class LayoutModule {}
