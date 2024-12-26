import { Component } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeRepository } from '../model/employee.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  employee: Employee = new Employee();

  constructor(private employeeRepository: EmployeeRepository,
              private router: Router,
              activateRoute: ActivatedRoute
  ) { 
    const id = activateRoute.snapshot.params["id"];
    if(id) {
      const value = this.employeeRepository.getEmployee(id);
      if(value !== undefined) {
        debugger;
        this.employee = value;
      }
    }
  }

  save(form: NgForm) {
    this.employeeRepository.saveEmployee(this.employee).subscribe(result => {
      debugger;
      this.router.navigateByUrl("/employees/update/success");
    });
  }
}
