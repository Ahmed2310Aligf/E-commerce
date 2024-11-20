import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription ,merge} from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent implements OnInit,OnDestroy {

sub!:Subscription

num1=5
num2=10
num3=20

ngOnInit(): void {

 var obs1=new Observable(num =>{
  console.log( this.num1*this.num2*this.num3);


  })
 var obs2=new Observable(num =>{
  console.log( this.num2+this.num1+this.num3);


  })



  var sub3=merge(obs1,obs2)


sub3.subscribe({
  next:(num)=>console.log(num),
  error:err=>console.error(err),

})


}

ngOnDestroy(): void {

  this.sub.unsubscribe()
}



}
