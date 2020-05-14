import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global/global.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

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
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule
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
