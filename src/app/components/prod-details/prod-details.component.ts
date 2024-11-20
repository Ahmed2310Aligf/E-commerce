import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { ProductService } from '../Sevices/product.service';
import { IProduct } from '../../models/iproduct';
import { ProductService } from '../../Services/product.service';
import { MyApiProdService } from '../../Services/my-api-prod.service';

@Component({
  selector: 'app-prod-details',
  standalone: true,
  imports: [],
  templateUrl: './prod-details.component.html',
  styleUrl: './prod-details.component.scss'
})
export class ProdDetailsComponent implements OnInit {



constructor(private activateed:ActivatedRoute,private prodServices:ProductService,private router:Router ,private prodWithApi:MyApiProdService){

}
product:IProduct|undefined=undefined
currentID:number=0

  ngOnInit(): void {

// this.currentID = Number(this.activateed.snapshot.paramMap.get('prodId'))||0


//day5
 this.ids= this.prodServices.GEtIds()

 this.activateed.paramMap.subscribe(id=>{
  this.currentID=Number(id.get('prodId'))
  ||0

  // this.product=this.prodServices.GetProdById(this.currentID)

  //day6
   this.prodWithApi.getProdById(this.currentID.toString()).subscribe(prod=>{
    this.product=prod
  })

 })

//  console.log(this.ids);

  }

 //day 5
 ids:number[]=[]

 currentIndex:number=0

  back(){
this.currentIndex=this.ids.indexOf(this.currentID)
this.router.navigate(['/product',this.ids[--this.currentIndex]])
  }
next(){
  this.currentIndex=this.ids.indexOf(this.currentID)
  this.router.navigate(['/product',this.ids[++this.currentIndex]])
}

searchResults:IProduct[]=[]



}
