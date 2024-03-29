import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  public getAllProducts(): Observable<any> {
    return this.http.get(
      "http://localhost:8091/product");
    }
}
