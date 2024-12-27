import { Injectable } from "@angular/core";

export enum Gender {
    Unknown = "",
    Male = 1, 
    Female = 2
}

@Injectable()
export class Employee {
    public id: string = "";
    public name: string = "";
    public documentNumber: string = "";
    public birthDate: string = "";
    public email: string = "";
    public gender: Gender = Gender.Unknown;
}