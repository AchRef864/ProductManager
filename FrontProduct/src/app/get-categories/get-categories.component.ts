// get-categories.component.ts
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { CreateCategoryDialogService } from '../service/create-category-dialog.service'; // Import the service
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-categories',
  templateUrl: './get-categories.component.html',
  styleUrls: ['./get-categories.component.css']
})
export class GetCategoriesComponent implements OnInit {

  categories: any = [];

  constructor(private service: CategoryService, private createCategoryDialogService: CreateCategoryDialogService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.service.getAllCategories().subscribe((res) => {
      console.log(res);
      this.categories = res;
    });
  }

  deleteCategory(code: number) {
    this.service.deleteCategory(code).subscribe((res) => {
      console.log(code);
      this.getAllCategories();
    })
  }

  openCreateCategoryDialog() {
    this.createCategoryDialogService.openCreateDialog();
  }
  closeCreateCategoryDialog() {
    this.createCategoryDialogService.closeCreateDialog();

  }

  openEditCategoryDialog(code: number) {
    this.createCategoryDialogService.openEditeDialog();
  }
}
