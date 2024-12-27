import { Component } from '@angular/core';
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../base.component';
import { CustomerRepository } from '../model/customer.repository';
import { EmployeeRepository } from '../model/employee.repository';
import { Customer } from '../model/customer.model';
import { Employee } from '../model/employee.model';
import { OrderFilter } from '../filter/order.filter';
import { NgForm } from '@angular/forms';
import { CustomerFilter } from '../filter/customer.filter';
import { EmployeeFilter } from '../filter/employee.filter';

@Component({
  selector: 'app-orders',  
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent extends BaseComponent {

  orderFilter: OrderFilter = new OrderFilter();
  selectedOrder: Order | undefined;  
  customers: Customer[] = [];
  employees: Employee[] = [];
  orders: Order[] = [];

  constructor(private orderRepository: OrderRepository,
              private customerRepository: CustomerRepository,
              private employeeRepository: EmployeeRepository,
              private router: Router,
              activateRoute: ActivatedRoute
  ) { 
    super(router, activateRoute);
  }

  ngOnInit() {

    this.customerRepository.getCustomers(new CustomerFilter()).subscribe(result => {
      this.customers = result;
    });

    this.employeeRepository.getEmployees(new EmployeeFilter()).subscribe(result => {
      this.employees = result;
    });

    this.orderRepository.getOrders(new OrderFilter()).subscribe(result => {
      this.orders = result;
    });
  }
  
  edit(id: string) {
    this.router.navigateByUrl(`order/edit/${id}`);
  }

  showRemoveModal(id: string) {
    this.selectedOrder = this.orderRepository.getOrder(id);
    super.toggleModal();    
  }

  confirmDelete() {
    if (this.selectedOrder != undefined) {
      this.orderRepository.removeOrder(this.selectedOrder.id).subscribe(result => {        
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

  search(form: NgForm) {
    
  }
}
