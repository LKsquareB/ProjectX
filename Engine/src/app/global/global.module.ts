import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global/global.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    GlobalComponent, 
    HeaderComponent, 
    FooterComponent, 
    SidenavComponent, 
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    GlobalComponent, 
    HeaderComponent, 
    FooterComponent, 
    SidenavComponent,
    PageNotFoundComponent
  ]
})
export class GlobalModule { }
