import { Component } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeRepository } from '../model/employee.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBaseComponent } from '../form-base.component';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent extends FormBaseComponent {

  employee: Employee = new Employee();
  editing: boolean = false;

  constructor(private employeeRepository: EmployeeRepository,
              private router: Router,
              activateRoute: ActivatedRoute
  ) { 
    super();
    const id = activateRoute.snapshot.params["id"];
    if(id) {
      this.employeeRepository.getEmployee(id)
                             .subscribe(value => {
                                if(value !== undefined) {
                                  debugger;
                                  this.employee = value;
                                  this.editing = true;
                                }
                             });
    } 
  }

  save(form: NgForm) {
    if(form.valid) {
      if (this.editing) {
        this.employeeRepository.updateEmployee(this.employee)
                               .subscribe(result => {
                                  this.router.navigateByUrl("/employees/update/success");
                               });
      } else {
        this.employeeRepository.createEmployee(this.employee)
                               .subscribe(result => {
                                  this.router.navigateByUrl("/employees/create/success");
                               });
      }
    } else {
      super.checkFormValidation(form);
    }
  }
}
