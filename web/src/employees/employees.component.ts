import { Component } from '@angular/core';
import { EmployeeRepository } from '../model/employee.repository';
import { Employee } from '../model/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent extends BaseComponent {

    constructor(private employeeRepository: EmployeeRepository,
                private router: Router,
                activateRoute: ActivatedRoute
    ) { 
      super(router, activateRoute);
    }

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
