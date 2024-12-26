import { Injectable } from "@angular/core";
import { Employee } from "./employee.model";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs";

@Injectable()
export class EmployeeRepository {

    private employees: Employee[] = [];

    constructor(private dataSource: StaticDataSource) { 
        dataSource.getEmployees().subscribe(data => {
            this.employees = data;
        });
    }

    getEmployees(): Employee[] {
        return this.employees;
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