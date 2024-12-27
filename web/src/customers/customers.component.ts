import { Component } from '@angular/core';
import { CustomerRepository } from '../model/customer.repository';
import { Customer } from '../model/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../base.component';
import { NgForm } from '@angular/forms';
import { CustomerFilter } from '../filter/customer.filter';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent extends BaseComponent {

  customerFilter: CustomerFilter = new CustomerFilter();
  selectedCustomer: Customer | undefined;  
  customers: Customer[] = [];

  constructor(private customerRepository: CustomerRepository,
              private router: Router,
              activateRoute: ActivatedRoute
  ) { 
    super(router, activateRoute);
  }

  ngOnInit() {
    this.search();
  }

  edit(id: string) {
    this.router.navigateByUrl(`customer/edit/${id}`);
  }
  
  showRemoveModal(id: string) {
    this.selectedCustomer = this.customerRepository.getCustomer(id);
    super.toggleModal();    
  }

  confirmDelete() {
    if (this.selectedCustomer != undefined) {
      this.customerRepository.removeCustomer(this.selectedCustomer.id).subscribe(result => {        
        this.toggleModal();
        this.showRemoveResult = true;

        if (result) {
          this.showSuccess = true;
        } else {
          this.showError = true;
        }
      });
    }
  }

  search() {
    this.customerRepository.getCustomers(this.customerFilter).subscribe(result => {
      this.customers = result;
    });
  }
}
