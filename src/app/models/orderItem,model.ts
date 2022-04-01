import { ProductModel } from "./products.model";

export class OrderItemModel {
  public produto: ProductModel
  public quantidade: number;

  constructor(produto: ProductModel, quantidade: number){
    this.produto = produto;
    this.quantidade = quantidade;
  }
}
