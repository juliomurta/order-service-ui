import { Component } from '@angular/core';
import { EmployeeRepository } from '../model/employee.repository';
import { Employee } from '../model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

    constructor(private employeeRepository: EmployeeRepository,
                private router: Router
    ) { }

    getEmployees(): Employee[] {
      return this.employeeRepository.getEmployees();
    }

    edit(id: string) {
      this.router.navigateByUrl(`employee/edit/${id}`);
    }

    remove(id: string) {
      alert(id);
    }
}
