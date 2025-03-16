import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-confirmation-dialog',
  standalone: false,
  templateUrl: './order-confirmation-dialog.component.html',
  styleUrl: './order-confirmation-dialog.component.css'
})
export class OrderConfirmationDialogComponent {
  constructor(private dialogRef: MatDialogRef<OrderConfirmationDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
