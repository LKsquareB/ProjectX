import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }
  @Input() data;
  dataSource;
  displayedColumns = [];

  ngOnInit(){
    console.log(this.data);
    this.dataSource = new MatTableDataSource(this.data.properties.elements);
    setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => this.dataSource.sort = this.sort);
    // this.dataSource.sort = this.sort;

    // For extracting keys from the data
    this.data.properties.elements.forEach(val=>{
      for(let key in val){
        if(!this.displayedColumns.includes(key)){
          this.displayedColumns.push(key);
        }
      }
    })
    console.log(this.displayedColumns); 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
