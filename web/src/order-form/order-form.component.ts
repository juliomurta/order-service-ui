import { Component } from '@angular/core';
import { Order } from '../model/order.model';
import { OrderRepository } from '../model/order.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Customer } from '../model/customer.model';
import { Employee } from '../model/employee.model';
import { CustomerRepository } from '../model/customer.repository';
import { EmployeeRepository } from '../model/employee.repository';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {
  
  order: Order = new Order();
  customers: Customer[] = [];
  employees: Employee[] = [];

  constructor(private orderRepository: OrderRepository,
              private customerRepository: CustomerRepository,
              private employeeRepository: EmployeeRepository,
              private router: Router,
              activateRoute: ActivatedRoute
  ) { 
    const id = activateRoute.snapshot.params["id"];
    if(id) {
      const value = this.orderRepository.getOrder(id);
      if(value !== undefined) {
        debugger;
        this.order = value;
      }
    }
  }

  ngOnInit() {
    this.customers = this.customerRepository.getCustomers();
    this.employees = this.employeeRepository.getEmployees();
  }

  save(form: NgForm) {
    this.orderRepository.saveOrder(this.order);
    this.router.navigateByUrl("/order");
  }
}
