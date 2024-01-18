import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateProductComponent } from '../create-product/create-product.component';

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {

  private dialogRef: any;

  constructor(private dialog: MatDialog) { }

  openCreateDialog(): void {
    this.dialogRef = this.dialog.open(CreateProductComponent, {
      width: '400px', // Adjust the width as needed
    });
  }

  closeCreateDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
