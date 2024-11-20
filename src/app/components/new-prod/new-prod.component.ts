import { Component, OnInit } from '@angular/core';
import { NewProductService } from '../../Services/new-product.service';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { MyApiProdService } from '../../Services/my-api-prod.service';

@Component({
  selector: 'app-new-prod',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-prod.component.html',
  styleUrl: './new-prod.component.scss',
})
export class NewProdComponent implements OnInit {
  constructor(
    private newProdService: NewProductService,
    private router: Router,
    private route: ActivatedRoute,
    private prodWithApi: MyApiProdService
  ) {}

  prodID: number = 0;
  newProduct: IProduct = {} as IProduct;

  ngOnInit(): void {
    this.prodID = Number(this.route.snapshot.paramMap.get('prodId')) || 0;

    console.log(this.prodID);

    if (this.prodID > 0) {
      this.prodWithApi.getProdById(this.prodID.toString()).subscribe({
        next: (data) => {
          console.log(data);
          this.newProduct = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  newProd() {
    if (this.prodID > 0) {
      console.log(this.newProduct);

      this.newProdService.updateProduct(this.newProduct).subscribe({
        next: (data) => {
          
          this.router.navigate(['/Products']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.newProdService.createNewProduct(this.newProduct).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/Products']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
