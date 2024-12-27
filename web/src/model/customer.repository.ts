import { Injectable } from "@angular/core";
import { Customer } from "./customer.model";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs";
import { CustomerFilter } from "../filter/customer.filter";

@Injectable()
export class CustomerRepository {

    constructor(private dataSource: StaticDataSource) { }

    getCustomers(filter: CustomerFilter): Observable<Customer[]> {
        return this.dataSource.getCustomers(filter);
    }

    getCustomer(id: string): Customer | undefined {
        return this.dataSource.getCustomer(id);
    }

    saveCustomer(customer: Customer): Observable<Customer> {
        return this.dataSource.saveCustomer(customer);
    }

    removeCustomer(id: string): Observable<boolean> {
        return this.dataSource.removeCustomer(id);
    }
}