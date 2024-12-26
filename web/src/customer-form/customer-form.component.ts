import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CustomerRepository } from '../model/customer.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {

  customer: Customer= new Customer();

  constructor(private customerRepository: CustomerRepository,
              private router: Router,              
              activateRoute: ActivatedRoute
  ) { 
    debugger;
    const id = activateRoute.snapshot.params["id"];
    if (id) {
      const value = this.customerRepository.getCustomer(id);
      if (value !== undefined) {
        this.customer = value;
      }
    }
  }

  save(form: NgForm) {
    this.customerRepository.saveCustomer(this.customer).subscribe(result => {
      debugger;
      this.router.navigateByUrl("/customers/update/success");  
    });    
  }
}
