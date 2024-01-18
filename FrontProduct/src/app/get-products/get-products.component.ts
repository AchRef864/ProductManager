import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CreateProductService } from '../service/create-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {

  categoryCode: number = this.activatedRoute.snapshot.params['id'];
  products: any = [];

  constructor(private service: ProductService,
    private activatedRoute: ActivatedRoute,
    private createProductService: CreateProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProductsByCategory(this.categoryCode);
  }

  getProductsByCategory(categoryCode: number) {
    this.service.getProductsByCategory(categoryCode).subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }

  deleteCategory(code: number) {
    this.service.deleteProduct(code).subscribe((res) => {
      console.log(code);
      this.getProductsByCategory(this.categoryCode);
    })
  }
  openCreateProductDialog() {
    this.createProductService.openCreateDialog();
  }
  closeCreateProductDialog() {
    this.createProductService.closeCreateDialog();

  }
}
