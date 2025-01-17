import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs";
import { OrderFilter } from "../filter/order.filter";
import { HttpClient } from "@angular/common/http";
import { Constants } from "../Constants";

@Injectable()
export class OrderRepository {

    private orders: Order[] = [];

    constructor(private dataSource: StaticDataSource,
                private http: HttpClient
    ) { }

    getOrders(filter: OrderFilter): Observable<Order[]> {
        return this.http.get<Order[]>(Constants.URL + "/orders");
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