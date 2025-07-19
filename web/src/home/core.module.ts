import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { EmployeesComponent } from '../employees/employees.component';
import { OrdersComponent } from '../orders/orders.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from '../customers/customers.component';
import { CustomerRepository } from '../model/customer.repository';
import { EmployeeRepository } from '../model/employee.repository';
import { OrderRepository } from '../model/order.repository';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { OrderFormComponent } from '../order-form/order-form.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AfterDateDirective } from '../directives/afterDate.directive';
import { AfterHourDirective } from '../directives/afterHour.directive';
import { SortDirectionComponent } from '../sort-direction/sort-direction.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { MenuComponent } from '../menu/menu.component';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../model/login.service';
import { HeaderComponent } from '../header/header.component';
import { HealthCheckService } from '../model/health-check.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxMaskDirective
  ],
  providers: [
    LoginService,
    HealthCheckService,
    CustomerRepository,
    EmployeeRepository,
    OrderRepository,
    provideNgxMask(),
    provideHttpClient()
  ],
  declarations: [    
    AfterDateDirective,
    AfterHourDirective,
    MenuComponent,
    HomeComponent,
    CustomersComponent,
    CustomerFormComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    OrdersComponent,
    OrderFormComponent,
    SortDirectionComponent,
    LoginComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
