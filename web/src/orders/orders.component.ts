import { Component } from '@angular/core';
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',  
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  constructor(private orderRepository: OrderRepository,
              private router: Router
  ) { }

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
