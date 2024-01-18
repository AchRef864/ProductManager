import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:1101/'; // Use a string for the base URL

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory(code: number): Observable<any> {
    return this.http.get<any>(BASIC_URL + `categories/${code}`);
  }

  getAllCategories(): Observable<any> {
    return this.http.get<any>(BASIC_URL + 'categories');
  }

  createCategory(category: any): Observable<any> {
    return this.http.post<any>(BASIC_URL + 'categories', category);
  }

  updateCategory(code: number, updatedCategory: any): Observable<any> {
    return this.http.put<any>(BASIC_URL + `categories/${code}`, updatedCategory);
  }

  deleteCategory(code: number): Observable<any> {
    return this.http.delete<any>(BASIC_URL + `categories/${code}`);
  }
}
