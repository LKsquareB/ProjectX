import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }
  @Input() data;
  dataSource;
  displayedColumns = [];

  ngOnInit(){
    console.log(this.data);
    this.dataSource = new MatTableDataSource(this.data.properties.elements);
    // this.dataSource.paginator = this.paginator;
    setTimeout(() => this.dataSource.paginator = this.paginator);

    // For extracting keys from the data
    this.data.properties.elements.forEach(val=>{
      for(let key in val){
        if(!this.displayedColumns.includes(key)){
          this.displayedColumns.push(key);
        }
      }
    })
    // this.displayedColumns = Object.keys(this.data.properties.elements[0]);
    // this.displayedColumns = [ "position", "name", "weight", "symbol" ];
    console.log(this.displayedColumns); 
  }

}
