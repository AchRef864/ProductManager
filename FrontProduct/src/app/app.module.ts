import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { GetCategoriesComponent } from './get-categories/get-categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { GetProductsComponent } from './get-products/get-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CreateCategoryComponent,
    GetCategoriesComponent,
    EditCategoryComponent,
    GetProductsComponent,
    CreateProductComponent,
    EditProductComponent,
    LoginComponent,
    GetAllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule // Include MatDialogModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
