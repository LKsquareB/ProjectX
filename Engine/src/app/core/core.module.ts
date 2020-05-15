import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar/snackbar.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogWindowComponent } from './dialog-window/dialog-window.component';


@NgModule({
  declarations: [SnackbarComponent, DialogWindowComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports:[
    SnackbarComponent,
    DialogWindowComponent
  ]
})
export class CoreModule { }
