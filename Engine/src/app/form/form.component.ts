import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Input() data;

  elementsData;
  ngOnInit(): void {
    console.log(this.data);
    this.elementsData = this.data.elements
  }

}
