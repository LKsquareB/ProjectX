import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent implements OnInit {

  constructor() { }

  @Input() data;

  ngOnInit(): void {
    console.log(this.data);
  }

}
