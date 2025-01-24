import { Injectable } from "@angular/core";
import { Customer } from "./customer.model";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs";
import { CustomerFilter } from "../filter/customer.filter";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Constants } from "../Constants";

@Injectable()
export class CustomerRepository {

    constructor(private dataSource: StaticDataSource,
                private http: HttpClient
    ) { }

    getCustomers(filter: CustomerFilter): Observable<Customer[]> {
        let params = new HttpParams();
        if (filter.name != '') {
           params = params.append("name", filter.name);
        }

        if (filter.documentNumber != '') {
            params = params.append("documentNumber", filter.documentNumber);
        }
        return this.http.get<Customer[]>(Constants.URL + "/customers?_page=" + filter.page, {params});
    }

    getCustomer(id: string): Observable<Customer> {
        return this.http.get<Customer>(Constants.URL + "/customers/" + id);
    }

    createCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(Constants.URL + "/customers", customer);
    }

    updateCustomer(customer: Customer): Observable<Customer> {
        const id = customer.id;
        return this.http.put<Customer>(Constants.URL + "/customers/" + id, customer);
    }

    removeCustomer(id: string): Observable<boolean> {       
        return this.http.delete<boolean>(Constants.URL + "/customers/" + id);
    }
}