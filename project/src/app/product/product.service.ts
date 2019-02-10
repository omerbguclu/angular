import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductList } from './productlist';
import { Http,Response } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:Http) { }

/*  getProductList():Observable<Product>{
    return this.http.get("http://northwindapi.azurewebsites.net/api/products").pipe(map(Response=>Response.json()));
  }*/

  addproduct(newProduct:Product){
    ProductList.push(newProduct);
  }
}
