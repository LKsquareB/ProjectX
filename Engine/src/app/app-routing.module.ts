import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TableModule } from './table/table.module';
import { TableComponent } from './table/table.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './global/page-not-found/page-not-found.component';


const routes: Routes = [
  // {path:'',redirectTo:'/home',pathMatch:'full'},
  // { path: 'home', component: AppComponent },
  // { path: 'table', component: TableComponent },
  // { path: 'form', component: FormComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
