import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { ProductService } from '../service/product.service';
import { CreateProductService } from '../service/create-product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editcreateProductForm!: FormGroup;

  codeCat: number = this.activatedRoute.snapshot.params['id1'];
  codeProd: number = this.activatedRoute.snapshot.params['id2'];

  product: any;
  category: any;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private fb: FormBuilder,
    private createProductService: CreateProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.editcreateProductForm = this.fb.group({
      code: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      lib: [null, Validators.required],
      prix: [null, [Validators.pattern(/^\d+(\.\d+)?$/)]],
      quantite: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      codeCat: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
    });

    this.productService.getProduct(this.codeProd).subscribe((data) => {
      this.product = data;
    });

    this.categoryService.getCategory(this.codeCat).subscribe((data) => {
      this.category = data;
    });
  }

  editProduct() {
    const productObject = {
      code: this.editcreateProductForm.value.code,
      lib: this.editcreateProductForm.value.lib,
      prix: this.editcreateProductForm.value.prix,
      quantite: this.editcreateProductForm.value.quantite,
      category: {
        code: this.category.code,
        lib: this.category.lib,
      }
    };
    console.log(productObject);
    this.productService.updateProduct(productObject.code, productObject).subscribe((res) => {
      console.log(res);
      this.router.navigate([`products/category/${this.category.code}`]);
    });
  }

}
