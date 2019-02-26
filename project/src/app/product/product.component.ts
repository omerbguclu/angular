import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  productList: Product[];

  ngOnInit() {
/*    this.productService.getProductList.subscribe(
      response => {
        this.productList = response;
      });*/
  }

}
