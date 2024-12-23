import { Component } from '@angular/core';
import { EmployeeRepository } from '../model/employee.repository';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

    constructor(private employeeRepository: EmployeeRepository) { }

    getEmployees(): Employee[] {
      return this.employeeRepository.getEmployees();
    }
}
