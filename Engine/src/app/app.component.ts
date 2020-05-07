import { Component } from '@angular/core';
import { SchemaService } from './schema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public schemaService: SchemaService) {}
  title = 'Engine';
  dataSource = this.schemaService.dataSchema();
}
