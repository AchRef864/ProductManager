import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { CreateCategoryDialogService } from '../service/create-category-dialog.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  editcreateCategoryForm!: FormGroup;

  code: number = this.activatedRoute.snapshot.params['id'];
  category: any;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private createCategoryDialogService: CreateCategoryDialogService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editcreateCategoryForm = this.fb.group({
      code: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      lib: [null, Validators.required],
    });

    // Subscribe to getCategory observable to get the category data
    this.categoryService.getCategory(this.code).subscribe((data) => {
      this.category = data;
    });
  }

  editCategory() {
    console.log(this.editcreateCategoryForm.value);
    const category = this.editcreateCategoryForm.value;
    const categoryCode = category.code;
    this.categoryService.updateCategory(categoryCode, category).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/categories']);
    });
  }
}
