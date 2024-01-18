import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { CreateProductService } from '../service/create-product.service';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  code: number = this.activatedRoute.snapshot.params['id'];
  createProductForm!: FormGroup;
  category: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private createProductService: CreateProductService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createProductForm = this.fb.group({
      code: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      lib: [null, Validators.required],
      prix: [null, [Validators.pattern(/^\d+(\.\d+)?$/)]],
      quantite: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      codeCat: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
    });

    this.categoryService.getCategory(this.code).subscribe((categoryData) => {
      this.category = categoryData;
      console.log(categoryData);
    });
  }

  createProduct() {
    const productObject = {
      code: this.createProductForm.value.code,
      lib: this.createProductForm.value.lib,
      prix: this.createProductForm.value.prix,
      quantite: this.createProductForm.value.quantite,
      category: {
        code: this.category.code,
        lib: this.category.lib,
      }
    };

    console.log(productObject);
    this.productService.createProduct(productObject).subscribe((res) => {
      console.log(res);
      this.router.navigate([`products/category/${this.category.code}`]);
    });
  }

}
