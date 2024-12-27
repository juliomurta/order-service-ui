import { Injectable } from "@angular/core";
import { Employee } from "./employee.model";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs";
import { EmployeeFilter } from "../filter/employee.filter";

@Injectable()
export class EmployeeRepository {

    constructor(private dataSource: StaticDataSource) { }

    getEmployees(filter: EmployeeFilter): Observable<Employee[]> {
        return this.dataSource.getEmployees(filter);
    }

    getEmployee(id: string): Employee | undefined {
        return this.dataSource.getEmployee(id);
    }

    saveEmployee(employee: Employee): Observable<Employee> {
        return this.dataSource.saveEmployee(employee);
    }

    removeEmployee(id: string): Observable<boolean> {
        return this.dataSource.removeEmployee(id);
    }
}