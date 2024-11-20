import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { NewProductService } from '../../../Services/new-product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.scss'
})
export class UserReactiveFormComponent {
  UserrForm:FormGroup;
  constructor(private Fb:FormBuilder,private newProdService:NewProductService){
this.UserrForm = new FormGroup({
  FullName: new FormControl('',[ Validators.required,Validators.minLength(6)]),
  email: new FormControl('',[ Validators.required,Validators.email]),
  phoneNumber: new FormControl('',[ Validators.required,]),
  password: new FormControl('',[ Validators.required,Validators.minLength(6)]),

  NewNumber: this.Fb.array([])

})
  }

  get NewNumber():FormArray{
    return this.UserrForm.get('NewNumber') as FormArray;
  }

newNum():FormGroup{
return this.Fb.group({newNumber:['']})
}

  AddNum(){

this.NewNumber.push(this.newNum())
  }

  removeNumber(index:number){
console.log(index);

  this.NewNumber.removeAt(index)
  }

  newUser: User = {} as User;

  AddUser() {

      this.newProdService.addNewUser(this.newUser).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }



