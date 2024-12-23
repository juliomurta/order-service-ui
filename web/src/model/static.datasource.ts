import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Order } from "./order.model";
import { Customer } from "./customer.model";
import { Employee, Gender } from "./employee.model";

@Injectable()
export class StaticDataSource {

    private orders: Order[] = [
        { id: "1", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "2", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "3", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "4", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "5", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "6", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "7", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "8", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "9", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "10", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "11", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "12", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "13", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "14", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "15", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "16", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "17", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "19", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "20", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "21", date: "23-12-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
    ];

    private customers: Customer[] = [
        { id: "1", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "2", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "3", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "4", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "5", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "6", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "7", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "8", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "9", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "10", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "11", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "12", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "13", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "14", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "15", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "16", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "17", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "18", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "19", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "20", documentNumber: "123456789", name: "test", email: "test@test.com" },
        { id: "21", documentNumber: "123456789", name: "test", email: "test@test.com" },
    ];

    private employees: Employee[] = [
        { id: "1", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Male },
        { id: "2", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Male },
        { id: "3", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Male },
        { id: "4", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Female },
        { id: "5", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Female },
        { id: "6", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Male },
        { id: "7", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Male },
        { id: "8", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Female },
        { id: "9", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Female },
        { id: "10", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Female },
        { id: "11", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Male },
        { id: "12", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Male },
        { id: "13", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Female },
        { id: "14", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Male },
        { id: "15", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Female },
        { id: "16", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Male },
        { id: "17", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Female },
        { id: "18", name: "Test", documentNumber: "123456789", email: "test@test.com", birthDate: "11-04-1994", gender: Gender.Male },
    ];

    getServiceOrders(): Observable<Order[]> {
        return from([this.orders]);
    }

    getCustomers(): Observable<Customer[]> {
        return from([this.customers]);
    }

    getEmployees(): Observable<Employee[]> {
        return from([this.employees]);
    }

    saveCustomer(customer: Customer): Observable<Customer> {
        console.log(JSON.stringify(customer));
        return from([customer]);
    }

    saveEmployee(employee: Employee): Observable<Employee> {
        console.log(JSON.stringify(employee));
        return from([employee]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}