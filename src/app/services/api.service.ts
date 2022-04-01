import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OrderModel } from "../models/order.model";
import { OrderItemModel } from "../models/orderItem,model";
import { ProductModel } from "../models/products.model";

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<ProductModel[]> {

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDkzNzAwMTMsInVzZXJfbmFtZSI6ImFsZXhhbmRyZSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiM2Y1MzBlZmYtYzhhMy00YmVjLWIyNmMtMDE3NDZhMzU0ZmQ0IiwiY2xpZW50X2lkIjoiYWxleGFuZHJlIiwic2NvcGUiOlsid3JpdGUiLCJyZWFkIl19.z6ezay-XSEXgHi-NeBo3K9V8lM6yWkHFJ39G9nf0Vfw"
    });

    return this.httpClient.get<ProductModel[]>("http://localhost:8080/produtos", { headers: headers });

  }

  public createOrder(): Observable<OrderModel> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDkzNzAwMTMsInVzZXJfbmFtZSI6ImFsZXhhbmRyZSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiM2Y1MzBlZmYtYzhhMy00YmVjLWIyNmMtMDE3NDZhMzU0ZmQ0IiwiY2xpZW50X2lkIjoiYWxleGFuZHJlIiwic2NvcGUiOlsid3JpdGUiLCJyZWFkIl19.z6ezay-XSEXgHi-NeBo3K9V8lM6yWkHFJ39G9nf0Vfw"
    });

    const order = {
      cliente: "2a9ead3e-ceac-4f40-88d7-13e27bec15e3",
      restaurante: "fb24cb0a-c84e-417f-b4d9-fa7d325edda2"
    }
    const body = JSON.stringify(order);
    return this.httpClient.post<OrderModel>("http://localhost:8080/pedidos", body, { headers: headers });
  }

  public createOrderItem(items: any, uuid: string): Observable<OrderItemModel[]> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDkzNzAwMTMsInVzZXJfbmFtZSI6ImFsZXhhbmRyZSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiM2Y1MzBlZmYtYzhhMy00YmVjLWIyNmMtMDE3NDZhMzU0ZmQ0IiwiY2xpZW50X2lkIjoiYWxleGFuZHJlIiwic2NvcGUiOlsid3JpdGUiLCJyZWFkIl19.z6ezay-XSEXgHi-NeBo3K9V8lM6yWkHFJ39G9nf0Vfw"
    });
    const body = JSON.stringify(items);
    return this.httpClient.post<OrderItemModel[]>(`http://localhost:8080/pedidos/${uuid}/pedidoItems`, body, { headers: headers });
  }
}

