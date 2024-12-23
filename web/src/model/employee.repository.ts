import { Injectable } from "@angular/core";
import { Employee } from "./employee.model";
import { StaticDataSource } from "./static.datasource";

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
}