import { Component } from '@angular/core';
import { CustomerRepository } from '../model/customer.repository';
import { Customer } from '../model/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../base.component';
import { CustomerFilter } from '../filter/customer.filter';
import { SortDirection } from '../enum/sort-direction.enum';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent extends BaseComponent {

  customerFilter: CustomerFilter = new CustomerFilter();
  selectedCustomer: Customer | undefined;  
  customers: Customer[] = [];
  loadingResults: boolean = false;

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
    this.customerRepository.getCustomer(id).subscribe(value => {
      this.selectedCustomer = value;
      super.toggleModal();  
    });      
  }

  confirmDelete() {
    if (this.selectedCustomer != undefined) {
      this.customerRepository.removeCustomer(this.selectedCustomer.id).subscribe(result => {        
        super.toggleModal();
        this.showRemoveResult = true;
        if (result) {
          this.showSuccess = true;          
          this.search();
        } else {
          this.showError = true;
        }
      });
    }
  }

  search(searchReset: boolean = false) {
    if (searchReset) {
      this.customers = [];
      this.customerFilter.page = 1;
    }

    this.loadingResults = true;
    this.customerRepository.getCustomers(this.customerFilter)
    .subscribe(result => {      
      this.customers = this.customers.concat(result);
      this.loadingResults = false;
    });
  }

  getMoreItems() {
    this.customerFilter.page++;
    this.search();
  }

  sort(propertyName: string, type: string = "text") {    
    super.changeSortDirection();
      this.customers.sort((a: any, b: any) => {
      let value1 = 0;
      let value2 = 0; 
      if (type === "number") {
        value1 = parseInt(a[propertyName]);
        value2 = parseInt(b[propertyName]);
      } else if(type === "text") {
        value1 = a[propertyName].toString().toLowerCase();
        value2 = b[propertyName].toString().toLowerCase();
      } else {
        value1 = a[propertyName];
        value2 = b[propertyName];
      }

      if (this.direction === SortDirection.Asc) {      
        return value1 > value2 ? 1 : value1  < value2  ? -1 : 0;
      } else {
        return value1 < value2 ? 1 : value1  > value2  ? -1 : 0;
      }
    });      
  }
}
