import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { FormControl, FormsModule } from '@angular/forms';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-parents',
  standalone: true,
  imports: [ProductComponent,FormsModule],
  templateUrl: './product-parents.component.html',
  styleUrl: './product-parents.component.scss'
})
export class ProductParentsComponent {


  filterByPrice:number =0;



  
  cartArry:any[]=[]
  cart(newPrd:IProduct){

   let counter:number = 1
 let  indexOfTheElement= this.cartArry.findIndex((value) => value.name == newPrd.name);
if(this.cartArry.length==0){
  this.cartArry=[{
    name:newPrd.name,
    price:newPrd.price,
    quantity:counter,
    totalPrice:counter*newPrd.price,
  }]
}else if(indexOfTheElement<0)
{

    this.cartArry.push({
      name:newPrd.name,
      price:newPrd.price,
      quantity:counter,
      totalPrice:counter*newPrd.price,
    })
    // console.log(this.cartArry);
  }else{
    counter+1;
    this.cartArry[indexOfTheElement].quantity+=counter;
    this.cartArry[indexOfTheElement].totalPrice+= counter*newPrd.price;
  }
  }

}
