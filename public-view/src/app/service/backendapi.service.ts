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
  createProject(data): Observable<any> {
    const url = `${environment.baseUrl}/project/create`;
    return this.http.post(url, data);
  }
  getProject(id: string): Observable<any> {
    const url = `${environment.baseUrl}/project/`;
    return this.http.get(url + id);
  }
  putProject(id: string): Observable<any> {
    const url = `${environment.baseUrl}/project/`;
    return this.http.put(url, id);
  }
  //create client
  Createclient(data): Observable<any> {
    const url = `${environment.baseUrl}/client/create`;
    return this.http.post(url, data);
  }
  //get Client
  getAllclient(): Observable<any> {
    const url = `${environment.baseUrl}/client/all`;
    return this.http.get(url);
  }
  //update Client
  putclient(data): Observable<any> {
    const url = `${environment.baseUrl}/client/update`;
    return this.http.put(url, data);
  }
  //charge Client
  chargeclient(data): Observable<any> {
    const url = `${environment.baseUrl}/client/charge`;
    return this.http.post(url, data);
  }
}
