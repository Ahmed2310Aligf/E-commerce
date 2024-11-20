import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Userlogin:BehaviorSubject<boolean>

  constructor() {
    this.Userlogin = new BehaviorSubject<boolean>(this.IstokenInStorage);
   }


get IstokenInStorage():boolean {
  return localStorage.getItem('token')?true:false;
}

login(email:string, password:string){
  let token="wrewe55r"
  localStorage.setItem('token',token)
  this.Userlogin.next(true);
}

logout() {
  localStorage.removeItem('token');
  this.Userlogin.next(false);
}



}
