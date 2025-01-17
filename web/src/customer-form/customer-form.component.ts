import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CustomerRepository } from '../model/customer.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { FormBaseComponent } from '../form-base.component';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent extends FormBaseComponent {

  customer: Customer= new Customer();
  editing: boolean = false;

  constructor(private customerRepository: CustomerRepository,
              private router: Router,              
              activateRoute: ActivatedRoute
  ) { 
    super();
    const id = activateRoute.snapshot.params["id"];
    if (id) {
      this.customerRepository.getCustomer(id)
                             .subscribe(value => {
                                if (value !== undefined) {
                                  this.customer = value;
                                  this.editing = true;
                                }
                             });
    }
  }

  save(form: NgForm) {
    if (form.valid) {
      if (this.editing) {
        this.customerRepository.updateCustomer(this.customer)
                               .subscribe(result => {
                                  this.router.navigateByUrl("/customers/update/success");
                               });
      } else {
        this.customerRepository.createCustomer(this.customer)
                               .subscribe(result => {                                 
                                  this.router.navigateByUrl("/customers/create/success");  
                               });
      }
    } else {
      super.checkFormValidation(form);
    }    
  }
}
