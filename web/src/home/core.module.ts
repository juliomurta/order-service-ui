import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { EmployeesComponent } from '../employees/employees.component';
import { OrdersComponent } from '../orders/orders.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from '../customers/customers.component';
import { StaticDataSource } from '../model/static.datasource';
import { CustomerRepository } from '../model/customer.repository';
import { EmployeeRepository } from '../model/employee.repository';
import { OrderRepository } from '../model/order.repository';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    CustomerRepository,
    EmployeeRepository,
    OrderRepository,
    StaticDataSource
  ],
  declarations: [
    HomeComponent,
    CustomersComponent,
    EmployeesComponent,
    OrdersComponent
  ]
})
export class CoreModule { }
