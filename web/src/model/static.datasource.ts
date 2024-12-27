import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Order } from "./order.model";
import { Customer } from "./customer.model";
import { Employee, Gender } from "./employee.model";
import { CustomerFilter } from "../filter/customer.filter";
import { OrderFilter } from "../filter/order.filter";
import { EmployeeFilter } from "../filter/employee.filter";

@Injectable()
export class StaticDataSource {

    private orders: Order[] = [
        { id: "1", date: "23-01-2023", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "2", date: "20-02-2024", start: "09:00", finish: "16:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "3", date: "19-03-2022", start: "10:00", finish: "15:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "4", date: "09-04-2024", start: "11:00", finish: "14:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "5", date: "05-05-2023", start: "08:00", finish: "10:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "6", date: "03-06-2023", start: "08:00", finish: "11:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "7", date: "14-07-2023", start: "09:00", finish: "12:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "8", date: "13-08-2022", start: "09:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "9", date: "02-09-2022", start: "09:00", finish: "16:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "10", date: "02-10-2022", start: "11:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "11", date: "27-11-2021", start: "10:00", finish: "11:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "12", date: "08-12-2022", start: "09:00", finish: "18:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "13", date: "14-01-2024", start: "08:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "14", date: "15-02-2024", start: "08:00", finish: "10:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "15", date: "30-03-2024", start: "09:00", finish: "13:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "16", date: "21-04-2023", start: "13:00", finish: "14:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "17", date: "06-05-2023", start: "14:00", finish: "15:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "19", date: "13-06-2024", start: "08:00", finish: "11:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "20", date: "03-07-2022", start: "16:00", finish: "19:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
        { id: "21", date: "23-08-2024", start: "16:00", finish: "17:00", description: "test test test test test test test test test", customerId: "1", employeeId: "1" },
    ];

    private customers: Customer[] = [
        { id: "1", documentNumber: "44689990000192", name: "aaaaa", email: "aaaa@test.com" },
        { id: "2", documentNumber: "84465074000193", name: "bbbb", email: "bbbbb@test.com" },
        { id: "3", documentNumber: "70357536000144", name: "ccccc", email: "cccccc@test.com" },
        { id: "4", documentNumber: "45861608000149", name: "ddddd", email: "ddddddd@test.com" },
        { id: "5", documentNumber: "17416515000170", name: "eeeeee", email: "eeeeeee@test.com" },
        { id: "6", documentNumber: "16785456000144", name: "fffff", email: "ffffff@test.com" },
        { id: "7", documentNumber: "83307806000154", name: "gggg", email: "ggggg@test.com" },
        { id: "8", documentNumber: "12939260000106", name: "hhhhhh", email: "hhhhhh@test.com" },
        { id: "9", documentNumber: "42340960000140", name: "iiiii", email: "iiiiii@test.com" },
        { id: "10", documentNumber: "93455324000103", name: "jjjjj", email: "jjjjj@test.com" },
        { id: "11", documentNumber: "16743127000130", name: "kkkkk", email: "kkkkkk@test.com" },
        { id: "12", documentNumber: "16937121000102", name: "llllll", email: "lllll@test.com" },
        { id: "13", documentNumber: "28505265000160", name: "mmmmm", email: "mmmm@test.com" },
        { id: "14", documentNumber: "52511919000143", name: "nnnnnn", email: "nnnnn@test.com" },
        { id: "15", documentNumber: "08031170000145", name: "oooooo", email: "ooooo@test.com" },
        { id: "16", documentNumber: "43089840000185", name: "pppppp", email: "pppp@test.com" },
        { id: "17", documentNumber: "14989831000142", name: "qqqqqq", email: "qqqq@test.com" },
        { id: "18", documentNumber: "35336614000123", name: "rrrrr", email: "rrrrrt@test.com" },
        { id: "19", documentNumber: "39283871000103", name: "sssss", email: "ssss@test.com" },
        { id: "20", documentNumber: "36124193000130", name: "tttt", email: "tttttt@test.com" },
        { id: "21", documentNumber: "66800205000160", name: "uuuuu", email: "uuuuuu@test.com" },
    ];

    private employees: Employee[] = [
        { id: "1", name: "aaaaa", documentNumber: "123456789", email: "test@test.com", birthDate: "21-05-1994", gender: Gender.Male },
        { id: "2", name: "bbbb", documentNumber: "97449362074", email: "bbbb@test.com", birthDate: "13-04-1984", gender: Gender.Male },
        { id: "3", name: "ccccc", documentNumber: "81548938009", email: "cccc@test.com", birthDate: "11-04-1994", gender: Gender.Male },
        { id: "4", name: "ddddddd", documentNumber: "90225709082", email: "ddddd@test.com", birthDate: "11-01-1974", gender: Gender.Female },
        { id: "5", name: "eeeee", documentNumber: "69839745069", email: "eeeee@test.com", birthDate: "11-04-1994", gender: Gender.Female },
        { id: "6", name: "ffffff", documentNumber: "04314092009", email: "fffff@test.com", birthDate: "23-12-1994", gender: Gender.Male },
        { id: "7", name: "ggggg", documentNumber: "13175007090", email: "ggggg@test.com", birthDate: "11-06-1994", gender: Gender.Male },
        { id: "8", name: "hhhhh", documentNumber: "15699426094", email: "hhhhh@test.com", birthDate: "11-07-1994", gender: Gender.Female },
        { id: "9", name: "iiii", documentNumber: "13682283056", email: "iiiii@test.com", birthDate: "13-04-1994", gender: Gender.Female },
        { id: "10", name: "jjjjjj", documentNumber: "24050345064", email: "jjjj@test.com", birthDate: "05-04-1999", gender: Gender.Female },
        { id: "11", name: "kkkkkkk", documentNumber: "51017246025", email: "kkkk@test.com", birthDate: "11-04-2000", gender: Gender.Male },
        { id: "12", name: "llllll", documentNumber: "55945374067", email: "llll@test.com", birthDate: "01-09-2002", gender: Gender.Male },
        { id: "13", name: "mmmmm", documentNumber: "39852907093", email: "mmmm@test.com", birthDate: "30-04-2006", gender: Gender.Female },
        { id: "14", name: "nnnnn", documentNumber: "65712278006", email: "nnn@test.com", birthDate: "10-10-1996", gender: Gender.Male },
        { id: "15", name: "oooo", documentNumber: "78726588013", email: "ooooo@test.com", birthDate: "11-04-1994", gender: Gender.Female },
        { id: "16", name: "ppppp", documentNumber: "50920294049", email: "ppppp@test.com", birthDate: "25-02-1998", gender: Gender.Male },
        { id: "17", name: "qqqqq", documentNumber: "82847515003", email: "qqqqq@test.com", birthDate: "07-07-1999", gender: Gender.Female },
        { id: "18", name: "rrrrr", documentNumber: "45833315093", email: "rrrrr@test.com", birthDate: "10-01-1994", gender: Gender.Male },
    ];

    getServiceOrders(filter: OrderFilter): Observable<Order[]> {
        return from([this.orders]);
    }

    getCustomers(filter: CustomerFilter): Observable<Customer[]> {
        return from([this.customers]);
    }

    getEmployees(filter: EmployeeFilter): Observable<Employee[]> {
        return from([this.employees]);
    }

    getCustomer(id: string): Customer | undefined {
        const customer = this.customers.find(c => c.id === id);
        return customer;
    }

    getEmployee(id: string): Employee | undefined {
        const employee = this.employees.find(e => e.id === id);
        return employee;
    }

    saveCustomer(customer: Customer): Observable<Customer> {
        console.log(JSON.stringify(customer));
        return from([customer]);
    }

    removeCustomer(id: string): Observable<boolean> {
        console.log(`${id} was removed!`);
        return from([true]);
    }

    getOrder(id: string): Order | undefined {
        const order = this.orders.find(o => o.id === id);
        return order;
    }

    saveEmployee(employee: Employee): Observable<Employee> {
        console.log(JSON.stringify(employee));
        return from([employee]);
    }

    removeEmployee(id: string): Observable<boolean> {
        console.log(`${id} was removed!`);
        return from([true]);
    } 

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }

    removeOrder(id: string): Observable<boolean> {
        console.log(`${id} was removed!`);
        return from([true]);
    } 
}