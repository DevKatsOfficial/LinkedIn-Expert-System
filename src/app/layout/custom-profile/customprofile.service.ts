import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class CustomprofileService {
  constructor(private http: HttpClient) {}

  getProfile(id: string): Observable<any> {
    console.log(id);
    const url = `${environment.baseUrl}/expert/`;
    return this.http.get(url + id);
  }
}
