import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/products.model';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: ProductModel[];

  constructor(private productService: ProductService, private orderService: OrderService) {
    this.products = productService.products;
  }

  ngOnInit(): void {

  }

  public add(product: ProductModel): void {
    if (product) {
      this.orderService.addItem(product);
    }
  }

  public remove(uuid: string): void {

    const product = this.products.find(product => product.uuid === uuid);

    if (product) {
      this.orderService.removeItem(product);
    }

  }

}
