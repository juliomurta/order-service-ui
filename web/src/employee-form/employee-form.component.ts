import { Component } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeRepository } from '../model/employee.repository';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  employee: Employee = new Employee();

  constructor(private employeeRepository: EmployeeRepository,
              private router: Router
  ) { }

  save(form: NgForm) {
    this.employeeRepository.saveEmployee(this.employee);
    this.router.navigateByUrl("/employee");
  }
}
