import { Component } from '@angular/core';
import { CustomerRepository } from '../model/customer.repository';
import { Customer } from '../model/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

  constructor(private customerRepository: CustomerRepository,
              private router: Router
  ) { }

  getCustomers(): Customer[] {
    return this.customerRepository.getCustomers();
  }  

  edit(id: string) {
    this.router.navigateByUrl(`customers/edit/${id}`);
  }
  
  remove(id: string) {
    alert(id);
  }
}
