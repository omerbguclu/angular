import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ProductList } from '../productlist';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  meta:Product = new Product;
  constructor(private productService:ProductService) { }
  

  ngOnInit() {
  }

 /* productAdd(newProduct:Product){
    //ProductList.push(newProduct);
    console.log(this.meta);
  }*/

  productAdd(newProduct:Product){
    //ProductList.push(newProduct);
    this.productService.addproduct(this.meta);
    console.log(this.meta);
    this.meta = new Product;
  }

}
