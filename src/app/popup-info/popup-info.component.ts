import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContactForm } from '../class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-info',
  standalone: false,
  templateUrl: './popup-info.component.html',
  styleUrl: './popup-info.component.css'
})
export class PopupInfoComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ContactForm,
    private dialogRef: MatDialogRef<PopupInfoComponent>, // Referencia al diálogo
    private router: Router // Router para la redirección
  ) {}

  goHome() {
    this.dialogRef.close(); // Cierra el diálogo
    this.router.navigate(['/home']); // Redirige a la página de inicio
  }
}

