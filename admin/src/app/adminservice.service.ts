import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdminserviceService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "auth-token"
    })
  };
  constructor(private http: HttpClient) {}
  //project
  createProject(data): Observable<any> {
    const url = `${environment.baseUrl}/project/create`;
    return this.http.post(url, data);
  }
  getAllproject(): Observable<any> {
    const url = `${environment.baseUrl}/project/all`;
    return this.http.get(url);
  }
  updateproject(id: string): Observable<any> {
    const url = `${environment.baseUrl}/project/`;
    return this.http.put(url, id);
  }
  //employee
  createEmployee(data): Observable<any> {
    const url = `${environment.baseUrl}/user/register/employee`;
    return this.http.post(url, data);
  }
  getAllemployee(): Observable<any> {
    const url = `${environment.baseUrl}/user/employee/all`;
    return this.http.get(url);
  }
  //client
  createClient(data): Observable<any> {
    const url = `${environment.baseUrl}/client/create`;
    return this.http.post(url, data);
  }
  getAllclient(): Observable<any> {
    const url = `${environment.baseUrl}/client/all`;
    return this.http.get(url);
  }
  updateClient(id: string): Observable<any> {
    const url = `${environment.baseUrl}/client/update`;
    return this.http.put(url, id);
  }
  remainingblance(data): Observable<any> {
    const url = `${environment.baseUrl}/client/check/remainingBalance`;
    return this.http.post(url, data);
  }
  chargeClient(data): Observable<any> {
    const url = `${environment.baseUrl}/client/charge`;
    return this.http.post(url, data);
  }
  addCredit(data): Observable<any> {
    const url = `${environment.baseUrl}/client/add/credit`;
    return this.http.post(url, data);
  }
  getAllProjects(): Observable<any> {
    const url = `${environment.baseUrl}/project/all`;
    return this.http.get(url);
  }
}
