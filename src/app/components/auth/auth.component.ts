import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  constructor(private auth:AuthService){ }
  ngOnInit(): void {

    this.isLogin = this.auth.IstokenInStorage
  }

  email:string=""
  password:string=""
  isLogin:boolean = false

loginFunc(){
  this.auth.login(this.email, this.password)
  this.isLogin =this.auth.IstokenInStorage
}

logOutFunc(){
  this.auth.logout()
  this.isLogin =this.auth.IstokenInStorage
}

}
