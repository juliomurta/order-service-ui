import { Component } from '@angular/core';
import { CustomerRepository } from '../model/customer.repository';
import { Customer } from '../model/customer.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

  selectedCustomer: Customer | undefined;

  isModalActive: boolean = false;
  showSuccess: boolean = false;
  showError: boolean = false;

  showUpdateResult: boolean = false;
  showRemoveResult: boolean = false;

  constructor(private customerRepository: CustomerRepository,
              private router: Router,
              activateRoute: ActivatedRoute
  ) {     
    debugger;
    const result = activateRoute.snapshot.params["result"];
    this.showSuccess = result === "success";
    this.showError = result === "error";
        
    const operation = activateRoute.snapshot.params["operation"];
    this.showUpdateResult = operation === "update";
    this.showRemoveResult = operation === "remove"   
  }

  getCustomers(): Customer[] {
    return this.customerRepository.getCustomers();
  }  

  edit(id: string) {
    debugger;
    this.router.navigateByUrl(`customer/edit/${id}`);
  }
  
  showRemoveModal(id: string) {
    this.selectedCustomer = this.customerRepository.getCustomer(id);
    this.toggleModal();    
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

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }
}
