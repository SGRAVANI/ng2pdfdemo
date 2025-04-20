import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileprintComponent } from './components/mobileprint/mobileprint.component';
import { BlobpdfComponent } from './components/blobpdf/blobpdf.component';
import { App1Component } from './components/app1/app1.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';

const routes: Routes = [
  { path: 'mobileprint', component: MobileprintComponent },
  { path: '', redirectTo: 'mobileprint', pathMatch: 'full' },
  {path:"sample1",component:App1Component},
  {path:"dynamic1",component:DynamicComponent},
  { path: 'assets/pdfjs/web/**', redirectTo: '', pathMatch: 'full' },
  {path:"blobfile",component:BlobpdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
