import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LocalStorageService } from "./services/local-storage.service";
import { AuthService } from "./services/auth.service";
import { HttpErrorInterceptor } from "./interceptors/http-error.interceptor";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [FormsModule],
  providers: [
    LocalStorageService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded. Import only in AppModule");
    }
  }
}
