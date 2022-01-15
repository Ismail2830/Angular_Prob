import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products?: Product[];
  constructor(private productsService: ProductService) {}

  ngOnInit(): void {}

  onGetAll() {
    this.productsService
      .getAllProduct()
      .subscribe((data) => (this.products = data));
  }
}
