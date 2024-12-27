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
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { OrderFormComponent } from '../order-form/order-form.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxMaskDirective
  ],
  providers: [
    CustomerRepository,
    EmployeeRepository,
    OrderRepository,
    StaticDataSource,
    provideNgxMask()
  ],
  declarations: [
    HomeComponent,
    CustomersComponent,
    CustomerFormComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    OrdersComponent,
    OrderFormComponent
  ]
})
export class CoreModule { }
