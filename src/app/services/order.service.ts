import { Injectable } from "@angular/core";
import { OrderModel } from "../models/order.model";
import { OrderItemModel } from "../models/orderItem,model";
import { ProductModel } from "../models/products.model";
import { ApiService } from "./api.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class OrderService {

  public order = new OrderModel();
  public _apiService: ApiService

  constructor(private apiService: ApiService) {

    this._apiService = apiService

    const uuid = localStorage.getItem("uuid");

    if (uuid) {
      this.order.uuid = uuid;
      return;
    }

    this._apiService.createOrder().subscribe({
      next: (order: OrderModel) => {
        this.order = order;
        localStorage.setItem("uuid", order.uuid)
      }
    });
  }

  public createOrdemItem(pedidoItems: any) {

    const uuid = localStorage.getItem("uuid")

    if (!uuid) {
      alert("Error")
      return
    }

    this._apiService.createOrderItem(pedidoItems, uuid).subscribe({
      next: (orderItem: OrderItemModel[]) => {

        localStorage.setItem("uuid", '')
      }
    });
  }

  public addItem(produto: ProductModel): void {
    const item = this.order.pedidoItems.find(item => item.produto.uuid === produto.uuid);

    if (item) {
      item.quantidade++;
    }

    if (!item) {
      this.order.pedidoItems.push(new OrderItemModel(produto, 1))
    }

    this.order.total! += produto.preco
  }

  public removeItem(produto: ProductModel): void {
    const item = this.order.pedidoItems.find(item => item.produto.uuid === produto.uuid);

    if (item) {
      item.quantidade--;

      this.order.total! -= produto.preco;

      if (this.order.total === 0) {
        this.order.pedidoItems.splice(this.order.pedidoItems.indexOf(item), 1)
      }

    }
  }
}
