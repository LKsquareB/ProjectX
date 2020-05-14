import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class SchemaService {
  constructor() { }

  dataSchema() {
    let dataSource = [
      {
        type: 'header',
        properties: {
          uiProperty: {
            // width: '50%',
            color: 'Primary',
            isEnable: true,
            // isVisible: true,
            // snackbar:{
            //   condition:"",
            //   text:"",
            // },
            isVisible:false,
            type: 'Horizontal',
          },
          home: {
            routerLink: '/home',
            routerLinkActive: 'active',
            text: 'Project X',
          },
          elements: [
            {
              routerLink: '/home',
              routerLinkActive: 'active',
              text: 'Project X',
            },
            {
              routerLink: '/table',
              routerLinkActive: 'active',
              text: 'Table',
            },
            {
              routerLink: '/form',
              routerLinkActive: 'active',
              text: 'Form',
            },
          ],
        },
      },
      {
        type: 'sidenav',
        properties: {
          uiProperty: {
            // width: '50%',
            // isVisible: true,
            // color: 'Primary',
            isEnable: true,
            isVisible:true,
            type: 'Vertical',
          },
          home: {
            routerLink: '/home',
            routerLinkActive: 'active',
            text: 'Project X',
          },
          elements: [
            {
              routerLink: '/home',
              routerLinkActive: 'active',
              text: 'Project X',
            },
            {
              routerLink: '/table',
              routerLinkActive: 'active',
              text: 'Table',
            },
            {
              routerLink: '/form',
              routerLinkActive: 'active',
              text: 'Form',
            },
          ],
        },
      },
      {
        type: 'FORM',
        properties: {
          uiProperty: {
            isVisible: true,
            isEnable: true,
            style:{
              width: '50%',
              
            }
          },
          elements: [
            {
              type: 'input',
              properties: {
                type: 'text',
                placeholder: 'Name',
                value: 'lk2b',
                width: '50%',
                isVisible: true,
                isEnable: true,
              },
            },
            {
              type: 'button',
              properties: {
                type: 'raised',
                text: 'submit',
                color: 'primary',
                isVisible: true,
                isEnable: true,
              },
            },
            {
              type: 'textarea',
              properties: {
                placeholder: 'Address',
                value: 'lk2b',
                isVisible: true,
                isEnable: true,
              },
            },
            {
              type: 'select',
              //   properties: {
              //     type: 'raised',
              //     text: 'submit',
              //     color: 'primary',
              //     isVisible: true,
              //     isEnable: true,
              //   }
              // },
              properties: {
                isVisible: true,
                isEnable: true,
                elements: [
                  {
                    value: 'kanav',
                    text: 'Kanav',
                    // color: 'primary',
                  },
                  {
                    value: 'Lakshit',
                    text: 'Lakshit',
                    // color: 'secondary',
                  },
                ],
              },
            },
            {
              type: 'radio',
              properties: {
                isVisible: true,
                isEnable: true,
                elements: [
                  {
                    value: 'kanav',
                    text: 'Kanav',
                    // color: 'primary',
                  },
                  {
                    value: 'Lakshit',
                    text: 'Lakshit',
                    // color: 'secondary',
                  },
                ],
              },
            },
            {
              type: 'checkbox',
              properties: {
                text: 'submit',
                color: 'primary',
                isVisible: true,
                isEnable: true,
              },
            },
          ],
        },
      },
      {
        type: 'TABLE',
        properties: {
          uiProperty: {
            isVisible: true,
            style: {
              width: '50%',
              height: '50%',
            },
          },
          elements: [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
            { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
            { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
            { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
            { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
            { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
          ],
          // //     // elements:[
          // //     //   {name:'Kanav', sex: 'Male'},
          // //     //   {name:'Lakshit', age:21},
          // //     // ]
        },
      },
      {
        type: 'snackbar',
        properties: {
          uiProperty: {
            // width: '50%',
            isVisible: true,
            // color:'Primary',
            isEnable: true,
          },
          elements: [
            {
              message: 'chaliye shuru karte hain',
            },
          ],
        },
      },
      {
        type: 'STEPPER',
        properties: {
          uiProperty: {
            isVisible: true,
            isEnable: true,
            type:'horizontal',
            linear:true,
            style:{
              width: '50%',
            }
          },
          steps:[
            {heading: 'Step 1',elements:[
              {
                type: 'input',
                properties: {
                  type: 'text',
                  placeholder: 'Name',
                  value: 'lk2b',
                  width: '50%',
                  isVisible: true,
                  isEnable: true,
                },
              },{
                type: 'input',
                properties: {
                  type: 'text',
                  placeholder: 'Name',
                  value: 'lk2b',
                  width: '50%',
                  isVisible: true,
                  isEnable: true,
                },
              },
            ] },
            {heading: 'Step 2',elements:[
              {
                type: 'textarea',
                properties: {
                  placeholder: 'Address',
                  value: 'lk2b',
                  isVisible: true,
                  isEnable: true,
                },
              },
              {
                type: 'select',
                properties: {
                  isVisible: true,
                  isEnable: true,
                  elements: [
                    {
                      value: 'kanav',
                      text: 'Kanav',
                      // color: 'primary',
                    },
                    {
                      value: 'Lakshit',
                      text: 'Lakshit',
                      // color: 'secondary',
                    },
                  ],
                },
              },

            ] },
            {heading: 'Step 3',elements:[
              {
                type: 'radio',
                properties: {
                  isVisible: true,
                  isEnable: true,
                  elements: [
                    {
                      value: 'kanav',
                      text: 'Kanav',
                      // color: 'primary',
                    },
                    {
                      value: 'Lakshit',
                      text: 'Lakshit',
                      // color: 'secondary',
                    },
                  ],
                },
              },
              {
                type: 'checkbox',
                properties: {
                  text: 'submit',
                  color: 'primary',
                  isVisible: true,
                  isEnable: true,
                },
              },
            ] },
            
          ]
        },
      },
      {
        type: 'footer',
        properties: {
          uiProperty: {
            // width: '50%',
            isVisible: true,
            // color:'Primary',
            // isEnable: true,
          },
          elements: [
            {
              text: 'Footer Footer dillon ka shooter',
            },
          ],
        },
      },
      
    ]
    //   }
    // },

    // ];
    return dataSource;
  }
}
