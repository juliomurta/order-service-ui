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
   { path: "new-employee", component: EmployeeFormComponent },
   { path: "edit-employee", component: EmployeeFormComponent },
   { path: "orders", component: OrdersComponent},
   { path: "new-order", component: OrderFormComponent },
   { path: "edit-order", component: OrderFormComponent },
   { path: "customers", component: CustomersComponent },
   { path: "new-customer", component: CustomerFormComponent },
   { path: "edit-customer", component: CustomerFormComponent },
   { path: "login", component: LoginComponent},   
   { path: "**", redirectTo: "/home"}
];
