import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CreateProductService } from '../service/create-product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css']
})
export class GetAllProductsComponent implements OnInit {

  products: any = [];

  constructor(private service: ProductService,
    private activatedRoute: ActivatedRoute,
    private createProductService: CreateProductService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.service.getAllProducts().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }

  buyProduct(product: any) {
    // Perform the logic to decrement quantity and handle the purchase
    product.quantite--;

    // Show a success toast
    this.toastr.success('Product purchased successfully!', 'Success');
  }
}
