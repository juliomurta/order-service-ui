import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { StaticDataSource } from "./static.datasource";

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
}