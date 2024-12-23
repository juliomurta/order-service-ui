import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EmployeesComponent } from '../employees/employees.component';
import { OrdersComponent } from '../orders/orders.component';
import { LoginComponent } from '../login/login.component';
import { CustomersComponent } from '../customers/customers.component';

export const routes: Routes = [
   { path: "home", component: HomeComponent },
   { path: "employees", component: EmployeesComponent },
   { path: "orders", component: OrdersComponent},
   { path: "customers", component: CustomersComponent },
   { path: "login", component: LoginComponent},   
   { path: "**", redirectTo: "/home"}
];
