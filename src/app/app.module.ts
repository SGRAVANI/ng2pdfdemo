import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileprintComponent } from './components/mobileprint/mobileprint.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { HttpClientModule } from '@angular/common/http';
import { BlobpdfComponent } from './components/blobpdf/blobpdf.component';
import { App1Component } from './components/app1/app1.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { MinimalisticConfigComponent } from './components/minimalistic-config/minimalistic-config.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileprintComponent,
    BlobpdfComponent,
    App1Component,
    DynamicComponent,
    MinimalisticConfigComponent,

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
