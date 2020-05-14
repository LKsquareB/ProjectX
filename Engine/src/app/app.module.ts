import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormModule } from './form/form.module';
import { TableModule } from './table/table.module';
import {MatCardModule} from '@angular/material/card';
// import { HeaderComponent } from './header/header.component';
// import {MatToolbarModule} from '@angular/material/toolbar';
import { GlobalModule } from './global/global.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormModule,
    TableModule,
    GlobalModule,
    MatCardModule,
    CoreModule
    // MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
