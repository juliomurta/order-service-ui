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

  remove(id: string) {
    alert(id);
  }
}
