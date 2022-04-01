import { OrderItemModel } from "./orderItem,model";

export class OrderModel {
  public uuid: string
  public client: string;
  public pedidoItems: OrderItemModel[];
  public total?: number;

  constructor(client: string = "", pedidoItems: OrderItemModel[] = [], uuid: string = "") {
    this.client = client;
    this.pedidoItems = pedidoItems;
    this.total = 0;
    this.uuid = uuid

    pedidoItems.forEach(item => {
      this.total! += item.produto.preco
    });
  }
}
