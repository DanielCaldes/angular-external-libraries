import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-material-form',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './material-form.component.html',
  styleUrl: './material-form.component.scss'
})
export class MaterialFormComponent {
  result :any = {}

  constructor(private dialog: MatDialog) {}
  
  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.result = result;
      }
    })
  }
}
