import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
// import { PaginatorComponent } from './paginator/paginator.component';
import { TableComponent } from './table.component';


@NgModule({
  declarations: [
    // PaginatorComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    // MatTableDataSource,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[
    TableComponent,
    // PaginatorComponent
  ]
})
export class TableModule { }