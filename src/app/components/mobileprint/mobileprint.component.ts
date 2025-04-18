
import { Component, AfterViewInit ,ViewChild} from '@angular/core';
import { jsPDF } from 'jspdf';
import { PdfJsViewerComponent } from 'ng2-pdfjs-viewer';
@Component({
  selector: 'app-mobileprint',
  templateUrl: './mobileprint.component.html',
  styleUrls: ['./mobileprint.component.css']
})
export class MobileprintComponent  {
  showPdf = false;
  pdfSrc1 = 'cy.pdf';
  showPdf2=false
  pdfSrc2: string='';
  pdfUrl:any;
  @ViewChild('pdfViewer', { static: false }) pdfViewer!: PdfJsViewerComponent;
  // Add this property
  // pdfBase64 = 'JVBERi0xLjUKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwgL1BhZ2VzIDIgMCBSID4+CmVuZG9iagoKMiAwIG9iago8PCAvQ291bnQgMSAvS2lkcyBbMyAwIFJdID4+CmVuZG9iagoKMyAwIG9iago8PCAvUGFyZW50IDIgMCBSIC9SZXNvdXJjZXMgPDwgPj4gL1R5cGUgL1BhZ2UgL01lZGlhQm94IFswIDAgNjEyIDc5Ml0gL0NvbnRlbnRzIDQgMCBSID4+CmVuZG9iagoKNCAwIG9iago8PCAvTGVuZ3RoIDQyID4+CnN0cmVhbQpCBi9GMQoxMDAgNzAwIFRECi9Gb28gQmFyIQplbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCA1CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDA5NSAwMDAwMCBuIAowMDAwMDAwMTUzIDAwMDAwIG4gCjAwMDAwMDAyNDYgMDAwMDAgbiAKMDAwMDAwMDM1MCAwMDAwMCBuIAp0cmFpbGVyCjw8IC9Sb290IDEgMCBSIC9JRCBbIDxDQ0Y0QzU1NjhDOTk2NkQ5NDAwMDAwMDAwMDAwMDA+IDxDQ0Y0QzU1NjhDOTk2NkQ5NDAwMDAwMDAwMDAwMDA+IF0gPj4Kc3RhcnR4cmVmCjQ2NQolJUVPRgo='




     previewPdf1() {
     this.showPdf = true;
     this.showPdf2=false
    }
    isMobile(): boolean {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    downloadPdfMobile(): void {
      if(this.showPdf2)
      {
      const link = document.createElement('a');
      link.href = this.pdfSrc2; // Assuming pdfSrc2 holds the blob: URL
      link.download = 'generated_mobile.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      }
    }


    loadPdfFromBlob(): void {

       const pdf = new jsPDF();
       pdf.text('Hello, World from jsPDF!', 10, 10);

       // Create blob
       const pdfBlob = pdf.output('blob');

       // Create a URL for that blob
       const pdfBlobUrl = URL.createObjectURL(pdfBlob);

       // Assign to the pdf viewer
       this.pdfSrc2 = pdfBlobUrl;
       this.showPdf=false
       this.showPdf2 = true;
   }
}