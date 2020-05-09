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
                placeholder: 'Name',
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
                placeholder: 'Address',
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
            },
            {
              type: 'radio',
              properties: {
                isVisible: true,
                isEnable: true,
                elements: [
                  {
                    value: 'Kanav',
                    text: 'Kanav',
                    // color: 'primary',
                  },
                  {
                    value: 'Lakshit',
                    text: 'Lakshit',
                    // color: 'secondary',
                  },
                ]
              },
            },
            {
              type: 'checkbox',
              properties: {
                text: 'submit',
                color: 'primary',
                isVisible: true,
                isEnable: true,
              }
            },

          ],
        },
      },
    ];
    return dataSource
  }
}
