import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './componenents/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { CategoryPipe } from './pipe/category.pipe';
import {MatCardModule} from '@angular/material/card';
import { ConfirmationDialogComponent } from './componenents/confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    ConfirmationDialogComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports:[
    ErrorDialogComponent,
    CategoryPipe,
    MatCardModule
  ]
})
export class SharedModule { }
