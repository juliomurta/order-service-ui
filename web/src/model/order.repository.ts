import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs";
import { OrderFilter } from "../filter/order.filter";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Constants } from "../Constants";

@Injectable()
export class OrderRepository {

    private orders: Order[] = [];

    constructor(private dataSource: StaticDataSource,
                private http: HttpClient
    ) { }

    getOrders(filter: OrderFilter): Observable<Order[]> {
        let params = new HttpParams();
        if (filter.employeeId != '') {
            params = params = params.append('customerId', filter.customerId);
        }

        if (filter.customerId != ''){
            params = params.append('employeeId', filter.employeeId);
        }
        return this.http.get<Order[]>(Constants.URL + "/orders?_page=" + filter.page, {params});
    }

    getOrder(id: string): Observable<Order> {
        return this.http.get<Order>(Constants.URL + "/orders/" + id);
    }

    createOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(Constants.URL + "/orders", order);
    }

    updateOrder(order: Order): Observable<Order> {
        const id = order.id;
        return this.http.put<Order>(Constants.URL + "/orders/" + id, order);
    }

    removeOrder(id: string): Observable<boolean> {
        return this.http.delete<boolean>(Constants.URL + "/orders/" + id);
    }
}