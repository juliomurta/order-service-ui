import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EmployeesComponent } from '../employees/employees.component';
import { OrdersComponent } from '../orders/orders.component';
import { LoginComponent } from '../login/login.component';
import { CustomersComponent } from '../customers/customers.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { OrderFormComponent } from '../order-form/order-form.component';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { authGuard } from '../guard/auth.guard';

export const routes: Routes = [
   { path: "home", component: HomeComponent, canActivate: [authGuard] },

   { path: "employees", component: EmployeesComponent, canActivate: [authGuard] },   
   { path: "employees/:operation/:result", component: EmployeesComponent, canActivate: [authGuard]},
   { path: "employee/new", component: EmployeeFormComponent, canActivate: [authGuard] },
   { path: "employee/edit/:id", component: EmployeeFormComponent, canActivate: [authGuard] },

   { path: "orders", component: OrdersComponent, canActivate: [authGuard]},
   { path: "orders/:operation/:result", component: OrdersComponent, canActivate: [authGuard]},
   { path: "order/new", component: OrderFormComponent, canActivate: [authGuard] },
   { path: "order/edit/:id", component: OrderFormComponent, canActivate: [authGuard] },

   { path: "customers", component: CustomersComponent, canActivate: [authGuard] },
   { path: "customers/:operation/:result", component: CustomersComponent, canActivate: [authGuard] },
   { path: "customer/new", component: CustomerFormComponent, canActivate: [authGuard] },
   { path: "customer/edit/:id", component: CustomerFormComponent, canActivate: [authGuard] },

   { path: "login", component: LoginComponent},   
   { path: "**", redirectTo: "/home" }
];
