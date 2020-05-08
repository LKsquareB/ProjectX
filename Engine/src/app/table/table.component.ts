import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }
  @Input() data;
  dataSource;
  displayedColumns = [];

  ngOnInit(): void {
    console.log(this.data);
    this.dataSource = new MatTableDataSource(this.data.properties.elements);

    // For extracting keys from the data
    this.data.properties.elements.forEach(val=>{
      for(let key in val){
        // console.log(keys)
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
