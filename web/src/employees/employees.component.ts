import { Component } from '@angular/core';
import { EmployeeRepository } from '../model/employee.repository';
import { Employee } from '../model/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../base.component';
import { EmployeeFilter } from '../filter/employee.filter';
import { NgForm } from '@angular/forms';
import { SortDirection } from '../enum/sort-direction.enum';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent extends BaseComponent {

    employees: Employee[] = [];
    employeeFilter: EmployeeFilter = new EmployeeFilter();
    selectedEmployee: Employee | undefined;
    loadingResults: boolean = false;

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
      this.employeeRepository.getEmployee(id)
                             .subscribe(value => {
                                this.selectedEmployee = value;
                                super.toggleModal();   
                             });
    }

    confirmDelete() {
      if (this.selectedEmployee != undefined) {
        this.employeeRepository.removeEmployee(this.selectedEmployee.id).subscribe(result => {        
          super.toggleModal();
          this.showRemoveResult = true;
  
          if (result) {
            this.showSuccess = true;
            this.search();  
          } else {
            this.showError = true;
          }
        });
      }
    }

    search(searchReset: boolean = false) {
      if (searchReset) {
        this.employees = [];
        this.employeeFilter.page = 1;
      }
  
      this.loadingResults = true;
      this.employeeRepository.getEmployees(this.employeeFilter).subscribe(result => {
        this.employees = this.employees.concat(result); 
        this.loadingResults = false;
      });
    }

    getMoreItems() {
      this.employeeFilter.page++;
      this.search();
    }

    sort(propertyName: string, type: string = "text") {    
      super.changeSortDirection();
      this.employees.sort((a: any, b: any) => {
        let value1 = 0;
        let value2 = 0; 
        if (type === "number") {
          value1 = parseInt(a[propertyName]);
          value2 = parseInt(b[propertyName]);
        } else if(type === "text") {
          value1 = a[propertyName].toString().toLowerCase();
          value2 = b[propertyName].toString().toLowerCase();
        } else {
          value1 = a[propertyName];
          value2 = b[propertyName];
        }
    
        if (this.direction === SortDirection.Asc) {      
          return value1 > value2 ? 1 : value1  < value2  ? -1 : 0;
        } else {
          return value1 < value2 ? 1 : value1  > value2  ? -1 : 0;
        }
      });      
  }
}
