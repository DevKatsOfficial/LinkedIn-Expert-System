import { CustomProfileComponent } from "./../custom-profile.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  {
    path: "",
    component: CustomProfileComponent
  }
];
@NgModule({
  declarations: [CustomProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CustomProfileModule {}
