import { Injectable } from "@angular/core";
import { Employee, Gender } from "./employee.model";
import { Observable } from "rxjs";
import { EmployeeFilter } from "../filter/employee.filter";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Constants } from "../Constants";

@Injectable()
export class EmployeeRepository {

    constructor(private http: HttpClient) { }

    getEmployees(filter: EmployeeFilter): Observable<Employee[]> {
        let params = new HttpParams();
        if (filter.name != '') {
           params = params.append("name", filter.name);
        }
        
        if (filter.documentNumber != '') {
            params = params.append("documentNumber", filter.documentNumber);
        }

        if (filter.gender != Gender.Unknown) {
            params = params.append("gender", filter.documentNumber);
        }

        params = params.append("page", filter.page);

        return this.http.get<Employee[]>(`${Constants.URL}/employees?_page=${filter.page}`, {params});
    }

    getEmployee(id: string): Observable<Employee> {
        return this.http.get<Employee>(Constants.URL + "/employees/" + id);
    }

    createEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(Constants.URL + "/employees", employee);
    }

    updateEmployee(employee: Employee): Observable<Employee> {
        const id = employee.id;
        return this.http.put<Employee>(Constants.URL + "/employees/" + id, employee);
    }

    removeEmployee(id: string): Observable<boolean> {
        return this.http.delete<boolean>(Constants.URL + "/employees/" + id);
    }
}