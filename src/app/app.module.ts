import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileprintComponent } from './components/mobileprint/mobileprint.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { HttpClientModule } from '@angular/common/http';
import { BlobpdfComponent } from './components/blobpdf/blobpdf.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileprintComponent,
    BlobpdfComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfJsViewerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
