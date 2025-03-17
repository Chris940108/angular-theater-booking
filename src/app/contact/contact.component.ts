import { Component, inject } from '@angular/core';
import {NgForm} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupInfoComponent } from '../popup-info/popup-info.component';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  dialog = inject(MatDialog);

  onSubmit(form: NgForm) { 
    this.dialog.open(PopupInfoComponent, { data: form.value });
    form.reset();
  }
}
