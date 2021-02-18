import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsoptionComponent } from './jsoption/jsoption.component';
import { XmloptionComponent } from './xmloption/xmloption.component';

const routes: Routes = [{path: '', component: XmloptionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
