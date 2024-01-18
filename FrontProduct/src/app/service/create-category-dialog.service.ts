// create-category-dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';

@Injectable({
  providedIn: 'root'
})
export class CreateCategoryDialogService {

  private dialogRef: any; // Store a reference to the dialog

  constructor(private dialog: MatDialog) { }

  openCreateDialog(): void {
    this.dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: '400px', // Adjust the width as needed
    });
  }

  closeCreateDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  openEditeDialog(): void {
    this.dialogRef = this.dialog.open(EditCategoryComponent, {
      width: '400px', // Adjust the width as needed
    });
  }

  closeEditDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
