import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductRemote } from '../dto/productRemote.dto'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductRemote[]> {
    return this.http.get<ProductRemote[]>('https://fakestoreapi.com/products')
  }

}
