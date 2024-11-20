import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ProductList: IProduct[] = [];


  constructor() {
    this.ProductList=[ {id:1, name: '55e', price: 250, quantity:0, PrdimgURL:'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,category:'dog'},
      {id:2, name: 'Ahmed badawy ', price: 600, quantity:8, PrdimgURL:'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,category:'dog'},
      {id:3, name: 'Gasha Marble Top Side Table', price: 1200, quantity:10, PrdimgURL:'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,category:'dog'},
      {id:4, name: 'Ventura Fabric Dining Chair', price: 700, quantity:2, PrdimgURL:'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,category:'dog'},
      {id:5, name: 'Ventura Fabric Dining Chair', price: 800, quantity:2, PrdimgURL:'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,category:'cat'},
      {id:6, name: 'Boston Study Chair', price: 650, quantity:10, PrdimgURL:'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,category:'cat'},
      {id:7, name: 'Coby Extendable TV Unit', price: 13000, quantity:0, PrdimgURL:'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,category:'Wood'},
      {id:8, name: 'Accent TV Unit', price: 1500, quantity:4, PrdimgURL:'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,category:'MDF'},
      {id:9, name: 'Plymouth TV Unit', price: 62, quantity:3, PrdimgURL:'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,category:'cat'},
];
   }

   GetAllProducts():IProduct[]{
    return this.ProductList;
   }

   filterbyCategory( selectFilter : string ):IProduct[]{
    return this.ProductList.filter(p=>p.category===selectFilter);
  }

  GetProdById(id:number):IProduct|undefined{
    return this.ProductList.find(p=>p.id==id);
  }

  GEtIds():number[]{
    return this.ProductList.map(p=>p.id);
  }


}
