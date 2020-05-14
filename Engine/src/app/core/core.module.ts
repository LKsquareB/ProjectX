import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [SnackbarComponent, DialogComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports:[
    SnackbarComponent,
    DialogComponent
  ]
})
export class CoreModule { }
