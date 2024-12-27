import { Component } from '@angular/core';
import { Order } from '../model/order.model';
import { OrderRepository } from '../model/order.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Customer } from '../model/customer.model';
import { Employee } from '../model/employee.model';
import { CustomerRepository } from '../model/customer.repository';
import { EmployeeRepository } from '../model/employee.repository';
import { FormBaseComponent } from '../form-base.component';
import { CustomerFilter } from '../filter/customer.filter';
import { EmployeeFilter } from '../filter/employee.filter';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent extends FormBaseComponent {
  
  order: Order = new Order();
  customers: Customer[] = [];
  employees: Employee[] = [];
  editing: boolean = false;

  constructor(private orderRepository: OrderRepository,
              private customerRepository: CustomerRepository,
              private employeeRepository: EmployeeRepository,
              private router: Router,
              activateRoute: ActivatedRoute
  ) { 
    super();
    const id = activateRoute.snapshot.params["id"];
    if(id) {
      const value = this.orderRepository.getOrder(id);
      if(value !== undefined) {
        this.order = value;
        this.editing = true;
      }
    }
  }

  ngOnInit() {
    this.customerRepository.getCustomers(new CustomerFilter()).subscribe(result => {
      this.customers = result;
    })

    this.employeeRepository.getEmployees(new EmployeeFilter()).subscribe(result => {
      this.employees = result;
    })
  }

  save(form: NgForm) {
    if (form.valid) {    
      this.orderRepository.saveOrder(this.order).subscribe(result => {
        if(this.editing) {
          this.router.navigateByUrl("/orders/update/success");
        } else {
          this.router.navigateByUrl("/orders/create/success");
        }
      });
    } else {
      super.checkFormValidation(form);
    }
  }
}
