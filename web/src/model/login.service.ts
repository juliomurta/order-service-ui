import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "./login.model";
import { Observable } from "rxjs";
import { Constants } from "../Constants";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }
    
    login(login: Login): Observable<object> {    
       return this.http.post(`${Constants.URL}/account/login`, login);
    }

    logout(): Observable<object> {
        return this.http.post(`${Constants.URL}/account/logout`, {});
    }
}