import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  myForm : FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<DialogComponent>){
    this.myForm = fb.group({
      name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    })
  }

  cancel(){
    this.dialogRef.close(false);
  }

  send(){
    console.log(this.myForm.valid);
    if(this.myForm.valid){
      this.dialogRef.close(this.myForm.value);
    }
  }
}
