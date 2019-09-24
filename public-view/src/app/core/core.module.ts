import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LocalStorageService } from "./services/local-storage.service";
import { AuthService } from "./services/auth.service";
import { HttpErrorInterceptor } from "./interceptors/http-error.interceptor";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class CoreModule {}
