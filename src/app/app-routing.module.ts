import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileprintComponent } from './components/mobileprint/mobileprint.component';
import { BlobpdfComponent } from './components/blobpdf/blobpdf.component';

const routes: Routes = [
  { path: 'mobileprint', component: MobileprintComponent },
  { path: '', redirectTo: 'mobileprint', pathMatch: 'full' },
  { path: 'assets/pdfjs/web/**', redirectTo: '', pathMatch: 'full' },
  {path:"blobfile",component:BlobpdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
