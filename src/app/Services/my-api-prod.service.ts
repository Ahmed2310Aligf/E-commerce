import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MyApiProdService {

  constructor(private httpClient:HttpClient) { }

  apiUrl=`${environment.apiUrl}/prudocts`
  getProducts():Observable<IProduct[]> {

    return this.httpClient.get<IProduct[]>(`${this.apiUrl}`);

}

getProdById(id:string):Observable<IProduct>{
  return this.httpClient.get<IProduct>(`${this.apiUrl}/${id}`);

}

searchByprodCategory(prodCategory:string):Observable<IProduct[]>{
  return this.httpClient.get<IProduct[]>(`${this.apiUrl}?Category=${prodCategory}`);
}

DeleteProduct(id:string):Observable<IProduct>{
  return this.httpClient.delete<IProduct>(`${this.apiUrl}/${id}`);
}



}
