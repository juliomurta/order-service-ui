import { Injectable } from "@angular/core";

export enum Gender {
    Male, 
    Female
}

@Injectable()
export class Employee {
    public id: string = "";
    public name: string = "";
    public documentNumber: string = "";
    public birthDate: string = "";
    public email: string = "";
    public gender?: Gender;
}