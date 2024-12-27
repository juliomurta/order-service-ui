import { Component } from '@angular/core';
import { EmployeeRepository } from '../model/employee.repository';
import { Employee } from '../model/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../base.component';
import { EmployeeFilter } from '../filter/employee.filter';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent extends BaseComponent {

    employees: Employee[] = [];
    employeeFilter: EmployeeFilter = new EmployeeFilter();
    selectedEmployee: Employee | undefined;

    constructor(private employeeRepository: EmployeeRepository,
                private router: Router,
                activateRoute: ActivatedRoute
    ) { 
      super(router, activateRoute);
    }

    ngOnInit() {
      this.employeeRepository.getEmployees(new EmployeeFilter()).subscribe(result => {
        this.employees = result;
      });
    }

    edit(id: string) {
      this.router.navigateByUrl(`employee/edit/${id}`);
    }

    showRemoveModal(id: string) {
      this.selectedEmployee = this.employeeRepository.getEmployee(id);
      super.toggleModal();    
    }

    confirmDelete() {
      if (this.selectedEmployee != undefined) {
        this.employeeRepository.removeEmployee(this.selectedEmployee.id).subscribe(result => {        
          this.toggleModal();
          this.showRemoveResult = true;
  
          if (result) {
            this.showSuccess = true;
          } else {
            this.showError = true;
          }
        });
      }
    }

    search() {
      
    }
}
