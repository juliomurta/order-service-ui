import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs";

@Injectable()
export class OrderRepository {

    private orders: Order[] = [];

    constructor(private dataSource: StaticDataSource) { 
        dataSource.getServiceOrders().subscribe(data => {
            this.orders = data;
        });
    }

    getOrders(): Order[] {
        return this.orders;
    }

    getOrder(id: string): Order | undefined {
        return this.dataSource.getOrder(id);
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }

    removeOrder(id: string): Observable<boolean> {
        return this.dataSource.removeOrder(id);
    }
}