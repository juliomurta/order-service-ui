import { Component } from '@angular/core';
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-orders',  
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent extends BaseComponent {

  selectedOrder: Order | undefined;

  constructor(private orderRepository: OrderRepository,
              private router: Router,
              activateRoute: ActivatedRoute
  ) { 
    super(router, activateRoute);
  }

  getOrders(): Order[] {
    return this.orderRepository.getOrders();
  }
  
  edit(id: string) {
    this.router.navigateByUrl(`order/edit/${id}`);
  }

  showRemoveModal(id: string) {
    this.selectedOrder = this.orderRepository.getOrder(id);
    super.toggleModal();    
  }

  confirmDelete() {
    if (this.selectedOrder != undefined) {
      this.orderRepository.removeOrder(this.selectedOrder.id).subscribe(result => {        
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
}
