import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class BackendapiService {
  constructor(private http: HttpClient) {}
  expertSearch(data): Observable<any> {
    const url = `${environment.baseUrl}/expert`;
    return this.http.post(url, data);
  }
}
