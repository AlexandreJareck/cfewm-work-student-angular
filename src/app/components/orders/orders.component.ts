import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { OrderItemModel } from 'src/app/models/orderItem,model';
import { ProductModel } from 'src/app/models/products.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public order: OrderModel;
  public _orderService: OrderService;

  constructor(private orderService: OrderService) {
    this._orderService = orderService
    this.order = this._orderService.order
  }

  ngOnInit(): void {

    this.order.total = 0;
    for (const item of this.order.pedidoItems) {
      this.order.total += item.produto.preco
    }
  }

  createOrderItem(order: OrderModel) {

    if(order.pedidoItems.length === 0){
      alert("Insira itens no pedido")
      return
    }

    const orderData = {
      pedidoItems: order.pedidoItems.map(item => ({
        produto: item.produto.uuid,
        quantidade: item.quantidade
      }))
    }

    this._orderService.createOrdemItem(orderData)
    window.location.reload();
    alert("Pedido salvo!")
  }

}
