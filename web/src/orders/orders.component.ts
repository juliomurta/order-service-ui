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
import { CustomerFilter } from '../filter/customer.filter';
import { EmployeeFilter } from '../filter/employee.filter';
import { SortDirection } from '../enum/sort-direction.enum';

@Component({
  selector: 'app-orders',  
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent extends BaseComponent {

  orderFilter: OrderFilter = new OrderFilter();
  selectedOrder: Order | undefined;    
  loadingResults: boolean = false;
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
    this.orderRepository.getOrder(id)
                        .subscribe(value => {
                          this.selectedOrder = value;
                          super.toggleModal();
                        });
  }

  confirmDelete() {
    if (this.selectedOrder != undefined) {
      this.orderRepository.removeOrder(this.selectedOrder.id).subscribe(result => {        
        this.toggleModal();
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
      this.orders = [];
      this.orderFilter.page = 1;
    }

    this.loadingResults = true;
    this.orderRepository.getOrders(this.orderFilter).subscribe(result => {
      this.orders = this.orders.concat(result);
      this.loadingResults = false;
    });
  }

  getMoreItems() {
    this.orderFilter.page++;
    this.search();
  }

  sort(propertyName: string, type: string = "text") {   
    super.changeSortDirection();
    this.orders.sort((a: any, b: any) => {    
      if (type === "customer") {
        let value1 = a.customer.name.toString().toLowerCase();
        let value2 = b.customer.name.toString().toLowerCase(); 

        if (this.direction === SortDirection.Asc) {      
          return value1 > value2 ? 1 : value1  < value2  ? -1 : 0;
        } else {
          return value1 < value2 ? 1 : value1  > value2  ? -1 : 0;
        }
      } else if (type === "employee") {
        let value1 = a.employee.name.toString().toLowerCase();
        let value2 = b.employee.name.toString().toLowerCase(); 

        if (this.direction === SortDirection.Asc) {      
          return value1 > value2 ? 1 : value1  < value2  ? -1 : 0;
        } else {
          return value1 < value2 ? 1 : value1  > value2  ? -1 : 0;
        }
      } else {
        let value1;
        let value2; 
  
        if (type === "number") {
          value1 = parseInt(a[propertyName]);
          value2 = parseInt(b[propertyName]);
        } else if (type === "date") {
          const date1 = a[propertyName].split('-');
          const date2 = b[propertyName].split('-');
          value1 = new Date(date1[0], date1[1], date1[2]);
          value2 = new Date(date2[0], date2[1], date2[2]);
        } else if (type === "time") {        
          const hour1 = a[propertyName].split(':');
          const hour2 = b[propertyName].split(':');
          value1 = new Date(2000, 1, 1, hour1[0], hour1[1]);
          value2 = new Date(2000, 1, 1, hour2[0], hour2[1]);
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
      }
    });  
  }
}
