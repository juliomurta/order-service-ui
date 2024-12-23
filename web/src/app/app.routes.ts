import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EmployeesComponent } from '../employees/employees.component';
import { OrdersComponent } from '../orders/orders.component';
import { LoginComponent } from '../login/login.component';
import { CustomersComponent } from '../customers/customers.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { OrderFormComponent } from '../order-form/order-form.component';
import { CustomerFormComponent } from '../customer-form/customer-form.component';

export const routes: Routes = [
   { path: "home", component: HomeComponent },
   { path: "employees", component: EmployeesComponent },
   { path: "employees/new", component: EmployeeFormComponent },
   { path: "employees/edit", component: EmployeeFormComponent },
   { path: "orders", component: OrdersComponent},
   { path: "orders/new", component: OrderFormComponent },
   { path: "orders/edit", component: OrderFormComponent },
   { path: "customers", component: CustomersComponent },
   { path: "customers/new", component: CustomerFormComponent },
   { path: "customers/edit", component: CustomerFormComponent },
   { path: "login", component: LoginComponent},   
   { path: "**", redirectTo: "/home"}
];
