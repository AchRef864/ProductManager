import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { GetCategoriesComponent } from './get-categories/get-categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { GetProductsComponent } from './get-products/get-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';

const routes: Routes = [
  { path: "category", component: CreateCategoryComponent },
  { path: "categories", component: GetCategoriesComponent },
  { path: "products", component: GetAllProductsComponent },
  { path: "categories/:id", component: EditCategoryComponent },
  { path: "products/category/:id", component: GetProductsComponent },
  { path: "products/category/:id/product", component: CreateProductComponent },
  { path: "products/category/:id1/product/:id2", component: EditProductComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
