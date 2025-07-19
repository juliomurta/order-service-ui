import { Injectable } from "@angular/core";
import { Constants } from "../Constants";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface HealthCheckResponse {
  isAuthenticated: boolean;
}

@Injectable()
export class HealthCheckService {
    constructor(private http: HttpClient) { }
    
    isLoggedIn(): Observable<HealthCheckResponse> {
       return this.http.get<HealthCheckResponse>(`${Constants.URL}/account/check`);
    }
}