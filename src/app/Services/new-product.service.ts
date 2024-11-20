import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class NewProductService {
  apiUrl = `${environment.apiUrl}/prudocts`;
  apiUrlUser = `${environment.apiUrl}/users`;

  constructor(private httpclient: HttpClient) {}

  createNewProduct(newProduct: IProduct): Observable<IProduct> {
    return this.httpclient
      .post<IProduct>(this.apiUrl, newProduct)
      .pipe(retry(5));
  }

  updateProduct(newProduct: IProduct): Observable<IProduct>{
    return this.httpclient
     .put<IProduct>(`${this.apiUrl}/${newProduct.id}`, newProduct)
     .pipe(retry(5));
  }

  addNewUser(newUser: User): Observable<User> {
    return this.httpclient
      .post<User>(this.apiUrlUser, newUser)
      .pipe(retry(5));
  }


}
