import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { TableComponent } from './table.component';


import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    // PaginatorComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    // MatTableDataSource,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    TableComponent,
    // PaginatorComponent
  ]
})
export class TableModule { }