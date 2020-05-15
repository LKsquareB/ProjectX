import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatStepperModule} from '@angular/material/stepper';
// import{MatNativeDateModule} from '@angular/material';

import { FormComponent } from './form.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { SelectComponent } from './select/select.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { TextareaComponent } from './textarea/textarea.component';
import { StepperComponent } from './stepper/stepper.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    FormComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    SelectComponent,
    DatepickerComponent,
    TextareaComponent,
    StepperComponent,
    DialogComponent
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
    MatNativeDateModule,
    MatStepperModule
  ],
  exports: [
    FormComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    SelectComponent,
    DatepickerComponent,
    TextareaComponent,
    StepperComponent,
    DialogComponent
  ]
})
export class FormModule { }
