import { Injectable } from "@angular/core";

@Injectable()
export class OrderFilter {
    public employeeId: string = "";
    public customerId: string = "";  
    public page: number = 1;  
}