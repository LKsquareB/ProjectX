import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import{MatNativeDateModule} from '@angular/material';

import { FormComponent } from './form.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { SelectComponent } from './select/select.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    FormComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    SelectComponent,
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    FormComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    SelectComponent,
    DatepickerComponent
  ]
})
export class FormModule { }
