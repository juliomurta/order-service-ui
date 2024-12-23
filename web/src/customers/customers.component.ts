import { Component } from '@angular/core';
import { CustomerRepository } from '../model/customer.repository';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

  constructor(private customerRepository: CustomerRepository) { }

  getCustomers(): Customer[] {
    return this.customerRepository.getCustomers();
  }  
}
