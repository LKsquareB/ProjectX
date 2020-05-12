import { Component, OnInit, Input } from '@angular/core';
// import { SchemaService } from 'src/app/schema.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {

  constructor() { }

  @Input() data;
  // data;

  ngOnInit(): void {
    // this.data= this.schemaService.dataSchema();
    console.log(this.data);
  }

}
