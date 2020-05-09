import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor() { }
  @Input() data;
  dataSource;
  displayedColumns = [];

  ngOnInit(){
     this.dataSource.paginator = this.paginator;
     this.dataSource = new MatTableDataSource(this.data.properties.elements);
  }

}
