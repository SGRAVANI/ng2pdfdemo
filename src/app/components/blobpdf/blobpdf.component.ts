import { AfterViewInit, Component,OnInit,ViewChild,ChangeDetectorRef } from '@angular/core';
import { PdfJsViewerComponent } from 'ng2-pdfjs-viewer';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-blobpdf',
  templateUrl: './blobpdf.component.html',
  styleUrls: ['./blobpdf.component.css']
})
export class BlobpdfComponent {
//  @ViewChild('pdfViewer', { static: false }) pdfViewer!: PdfJsViewerComponent;
  pdfSrc: string='';
  pdfUrl:any;
  showPdf:boolean=false;
  constructor(private cdr: ChangeDetectorRef) {
    // const base64 = `JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0tpZHMgWzMgMCBSXS9Db3VudCAxPj4KZW5kb2JqCjMgMCBvYmoKPDwvVHlwZS9QYWdlL1BhcmVudCAyIDAgUi9NZWRpYUJveFswIDAgNjEyIDc5Ml0vQ29udGVudHMgNCAwIFI+PgplbmRvYmoKNCAwIG9iago8PC9MZW5ndGggNTE+PnN0cmVhbQpCVAoxMDAgNzAwIFRkCihIZWxsbywgV29ybGQhKSBUagogRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTAgMDAwMDAgbiAKMDAwMDAwMDA4MCAwMDAwMCBuIAowMDAwMDAwMTU3IDAwMDAwIG4gCjAwMDAwMDAyMjkgMDAwMDAgbiAKdHJhaWxlcgo8PC9Sb290IDEgMCBSL0luZm8gNSAwIFI+PgpzdGFydHhyZWYKMjQ1CiUlRU9GCg==`;

    // const byteCharacters = atob(base64);
    // const byteArray = new Uint8Array(byteCharacters.length);
    // for (let i = 0; i < byteCharacters.length; i++) {
    //   byteArray[i] = byteCharacters.charCodeAt(i);
    // }
    // const blob = new Blob([byteArray], { type: 'application/pdf' });
    // this.pdfSrc = URL.createObjectURL(blob);
  }

  // ngAfterViewInit(): void {
  //   this.loadPdfFromBlob();
  // }

  loadPdfFromBlob(): void {

    const pdf = new jsPDF();
    pdf.text('Hello, World from jsPDF!', 10, 10);

    // Create blob
    const pdfBlob = pdf.output('blob');

    // Create a URL for that blob
    const pdfBlobUrl = URL.createObjectURL(pdfBlob);

    // Assign to the pdf viewer
    this.pdfSrc = pdfBlobUrl;
    this.showPdf = true;

    // const base64 = `JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0tpZHMgWzMgMCBSXS9Db3VudCAxPj4KZW5kb2JqCjMgMCBvYmoKPDwvVHlwZS9QYWdlL1BhcmVudCAyIDAgUi9NZWRpYUJveFswIDAgNjEyIDc5Ml0vQ29udGVudHMgNCAwIFIvUmVzb3VyY2VzPDwvRm9udDwvRjEgNSAwIFI+Pj4+PgplbmRvYmoKNCAwIG9iago8PC9MZW5ndGggNTY+PnN0cmVhbQpCVQovRjEgMTIgVGYKMTAwIDcwMCBUZAooSGVsbG8sIFdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iago1IDAgb2JqCjw8L1R5cGUvRm9udC9TdWJ0eXBlL1R5cGUxL0Jhc2VGb250L0hlbHZldGljYT4+CmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA1OCAwMDAwMCBuIAowMDAwMDAwMTA5IDAwMDAwIG4gCjAwMDAwMDAyMTAgMDAwMDAgbiAKMDAwMDAwMjgxIDAwMDAwIG4gCnRyYWlsZXIKPDwvUm9vdCAxIDAgUiA+PgpzdGFydHhyZWYKMzY5CiUlRU9GCg==`;

    // const byteCharacters = atob(base64);
    // const byteArray = new Uint8Array(byteCharacters.length);
    // for (let i = 0; i < byteCharacters.length; i++) {
    //   byteArray[i] = byteCharacters.charCodeAt(i);
    // }
    // const blob = new Blob([byteArray], { type: 'application/pdf' });

    // setTimeout(() => {
    //   this.pdfViewer.pdfSrc = blob;
    //   this.pdfViewer.refresh();
    // });
  }
}
