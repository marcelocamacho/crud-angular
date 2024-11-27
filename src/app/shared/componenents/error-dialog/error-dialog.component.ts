import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  standalone: false,

  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data:string){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
