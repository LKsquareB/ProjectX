import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SchemaService {
  constructor() { }

  dataSchema() {
    let dataSource = [
      {
        type: 'FORM',
        properties: {
          uiProperty: {
            width: '50%',
            isVisible: true,
            isEnable: true,
          },
          elements: [
            {
              type: 'input',
              properties: {
                type: 'text',
                placeholder: 'name',
                value: 'lk2b',
                isVisible: true,
                isEnable: true,
              }
            },
            {
              type: 'button',
              properties: {
                type: 'raised',
                text: 'submit',
                color: 'primary',
                isVisible: true,
                isEnable: true,
              }
            },
            {
              type: 'textarea',
              properties: {
                type: 'text',
                placeholder: 'name',
                value: 'lk2b',
                isVisible: true,
                isEnable: true,
              }
            },
            {
              type: 'select',
              properties: {
                type: 'raised',
                text: 'submit',
                color: 'primary',
                isVisible: true,
                isEnable: true,
              }
            }
          ],
        },
      },
    ];
    return dataSource
  }
}
