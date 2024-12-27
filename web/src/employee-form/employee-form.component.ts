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
      const value = this.employeeRepository.getEmployee(id);
      if(value !== undefined) {
        this.employee = value;
        this.editing = true;
      }
    } 
  }

  save(form: NgForm) {
    if(form.valid) {
      this.employeeRepository.saveEmployee(this.employee).subscribe(result => {
        if(this.editing) {
          this.router.navigateByUrl("/employees/update/success");
        } else {
          this.router.navigateByUrl("/employees/create/success");
        }
      });
    } else {
      super.checkFormValidation(form);
    }
  }
}
