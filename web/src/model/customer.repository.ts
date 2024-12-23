import { Injectable } from "@angular/core";
import { Customer } from "./customer.model";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs";

@Injectable()
export class CustomerRepository {

    private customers: Customer[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getCustomers().subscribe(data => { 
            this.customers = data;
        });
    }

    getCustomers(): Customer[] {
        return this.customers;
    }

    saveCustomer(customer: Customer): Observable<Customer> {
        return this.dataSource.saveCustomer(customer);
    }
}