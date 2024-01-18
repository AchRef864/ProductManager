import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:1101/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(code: number): Observable<any> {
    return this.http.get<any>(BASIC_URL + `products/${code}`);
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(BASIC_URL + 'products');
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(BASIC_URL + 'products', product);
  }

  updateProduct(code: number, updatedProduct: any): Observable<any> {
    return this.http.put<any>(BASIC_URL + `products/${code}`, updatedProduct);
  }

  getProductsByCategory(categoryCode: number): Observable<any> {
    return this.http.get<any>(BASIC_URL + `products/category/${categoryCode}`);
  }

  deleteProduct(code: number): Observable<any> {
    return this.http.delete<any>(BASIC_URL + `products/${code}`);
  }
}
