// create-category.component.ts
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { CreateCategoryDialogService } from '../service/create-category-dialog.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetCategoriesComponent } from '../get-categories/get-categories.component'

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  createCategoryForm!: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private createCategoryDialogService: CreateCategoryDialogService
  ) { }

  ngOnInit(): void {
    this.createCategoryForm = this.fb.group({
      code: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      lib: [null, Validators.required],
    });
  }

  createCategory() {
    console.log(this.createCategoryForm.value);
    this.categoryService.createCategory(this.createCategoryForm.value).subscribe((res) => {
      console.log(res);
      this.createCategoryDialogService.closeCreateDialog();
    });
  }

  openDialog() {
    this.createCategoryDialogService.openCreateDialog();
  }
}
