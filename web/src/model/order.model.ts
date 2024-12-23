import { Injectable } from "@angular/core";

@Injectable()
export class Order {
    public id: string = "";
    public description: string = "";
    public start: string = "";
    public finish: string = "";
    public date: string = "";
    public employeeId: string = "";
    public customerId: string = "";
}