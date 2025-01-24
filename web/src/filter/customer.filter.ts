import { Injectable } from "@angular/core";

@Injectable()
export class CustomerFilter {
    public name: string = "";
    public documentNumber: string = "";
    public page: number = 1;
}