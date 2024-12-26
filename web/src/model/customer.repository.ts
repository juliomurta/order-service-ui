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