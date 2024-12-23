import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { EmployeesComponent } from '../employees/employees.component';
import { OrdersComponent } from '../orders/orders.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CustomersComponent } from '../customers/customers.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    CustomersComponent,
    EmployeesComponent,
    OrdersComponent
  ]
})
export class CoreModule { }
