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
                    value: 'Name',
                    text: 'Kanav',
                    color: 'primary',
                  },
                  {
                    value: 'Name',
                    text: 'Lakshit',
                    color: 'secondary',
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
      {
        type: 'TABLE',
        properties: {
          uiProperty: {
            width: '50%',
            isVisible: true,
          },
          elements: [
              {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
              {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
              {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
              {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
              {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
              {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
              {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
              {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
              {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
              {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
            ]
          // elements:[
          //   {name:'Kanav', sex: 'Male'},
          //   {name:'Lakshit', age:21},
          // ]
        }

      }
    ];
    return dataSource
  }
}
