import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Engine';
  dataSource = [
    {
      type: 'FORM',
      elements: [
        { type: 'input', placeholder: "Test" },
        { type: 'input', placeholder: "Kanav" },
        { type: 'input', placeholder: "Lakshit" },
      ]
    },
    {
      type: 'TABLE',
      elements: [
        { type: 'input', placeholder: "Test" },
        { type: 'input', placeholder: "Kanav" },
        { type: 'input', placeholder: "Lakshit" },
      ]
    }
  ]
}
