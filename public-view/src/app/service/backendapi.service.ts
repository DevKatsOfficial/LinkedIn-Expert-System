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
    console.log(data);
    const url = `${environment.baseUrl}/expert/search`;
    return this.http.post(url, data);
  }
  getOne(id: string): Observable<any> {
    const url = `${environment.baseUrl}/expert/`;
    return this.http.get<any>(url + id);
  }
}
