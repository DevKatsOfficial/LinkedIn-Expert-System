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
  // getProject(id: string): Observable<any> {
  //   const url = `${environment.baseUrl}/project/`;
  //   return this.http.get(url + id);
  // }
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
  //Get project of employee
  GetprojectEmployee(): Observable<any> {
    const url = `${environment.baseUrl}/project/employee`;
    return this.http.get(url);
  }
  ProjectClaim(data): Observable<any> {
    const url = `${environment.baseUrl}/expert/claim`;
    return this.http.post(url, data);
  }
  getProjectByExpert(data): Observable<any> {
    const url = `${environment.baseUrl}/expert/get/project`;
    return this.http.post(url, data);
  }

  getProjectss(id: string): Observable<any> {
    const url = `${environment.baseUrl}/project/`;
    return this.http.get(url + id);
  }
  getProjectByExperts(data): Observable<any> {
    const url = `${environment.baseUrl}/expert/get/project`;
    return this.http.post(url, data);
  }

  getExpertByProjects(data): Observable<any> {
    const url = `${environment.baseUrl}/project/get/expert`;
    return this.http.post(url, data);
  }
  inviteExpert(data): Observable<any> {
    const url = `${environment.baseUrl}/invitation`;
    return this.http.post(url, data);
  }
}
