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
      const value = this.customerRepository.getCustomer(id);
      if (value !== undefined) {
        this.customer = value;
        this.editing = true;
      }
    }
  }

  save(form: NgForm) {
    if (form.valid) {
      this.customerRepository.saveCustomer(this.customer).subscribe(result => {
        if (this.editing) {
          this.router.navigateByUrl("/customers/update/success");  
        } else {
          this.router.navigateByUrl("/customers/create/success");  
        }
      });    
    } else {
      super.checkFormValidation(form);
    }    
  }
}
