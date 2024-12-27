import { Injectable } from "@angular/core";
import { Gender } from "../model/employee.model";

@Injectable()
export class EmployeeFilter {
    public name: string = "";
    public documentNumber: string = "";
    public beginBirthDate: Date = new Date();
    public endBirthDate: Date = new Date();
    public gender?: Gender;
}