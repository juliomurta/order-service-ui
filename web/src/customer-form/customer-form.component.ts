import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CustomerRepository } from '../model/customer.repository';
import { Router } from '@angular/router';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {

  customer: Customer = new Customer();

  constructor(private customerRepository: CustomerRepository,
              private router: Router
  ) { }

  save(form: NgForm) {
    this.customerRepository.saveCustomer(this.customer);
    this.router.navigateByUrl("/customers");
  }
}
