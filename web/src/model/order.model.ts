import { Injectable } from "@angular/core";
import { Customer } from "./customer.model";
import { Employee } from "./employee.model";

@Injectable()
export class Order {
    public id: string = "";
    public description: string = "";
    public start: string = "";
    public finish: string = "";
    public date: string = "";
    public employeeId: string = "";
    public employee: Employee = new Employee();
    public customerId: string = "";
    public customer: Customer = new Customer();
}