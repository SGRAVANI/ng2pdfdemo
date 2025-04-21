
import { Component, AfterViewInit ,ViewChild, NgZone, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import { PdfJsViewerComponent } from 'ng2-pdfjs-viewer';

@Component({
  selector: 'app-mobileprint',
  templateUrl: './mobileprint.component.html',
  styleUrls: ['./mobileprint.component.css']
})
export class MobileprintComponent implements AfterViewInit  {
  showPdf = false;
  pdfSrc1 = 'cy.pdf';
  externalWindow=true
  showPdf2=false
  pdfSrc2: string='';
  pdfUrl:any;
  @ViewChild('pdfViewer1', { static: false }) pdfViewer1!: PdfJsViewerComponent;
  @ViewChild('pdfViewer', { static: false }) pdfViewer!: PdfJsViewerComponent;
  // Add this property
  // pdfBase64 = 'JVBERi0xLjUKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwgL1BhZ2VzIDIgMCBSID4+CmVuZG9iagoKMiAwIG9iago8PCAvQ291bnQgMSAvS2lkcyBbMyAwIFJdID4+CmVuZG9iagoKMyAwIG9iago8PCAvUGFyZW50IDIgMCBSIC9SZXNvdXJjZXMgPDwgPj4gL1R5cGUgL1BhZ2UgL01lZGlhQm94IFswIDAgNjEyIDc5Ml0gL0NvbnRlbnRzIDQgMCBSID4+CmVuZG9iagoKNCAwIG9iago8PCAvTGVuZ3RoIDQyID4+CnN0cmVhbQpCBi9GMQoxMDAgNzAwIFRECi9Gb28gQmFyIQplbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCA1CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDA5NSAwMDAwMCBuIAowMDAwMDAwMTUzIDAwMDAwIG4gCjAwMDAwMDAyNDYgMDAwMDAgbiAKMDAwMDAwMDM1MCAwMDAwMCBuIAp0cmFpbGVyCjw8IC9Sb290IDEgMCBSIC9JRCBbIDxDQ0Y0QzU1NjhDOTk2NkQ5NDAwMDAwMDAwMDAwMDA+IDxDQ0Y0QzU1NjhDOTk2NkQ5NDAwMDAwMDAwMDAwMDA+IF0gPj4Kc3RhcnR4cmVmCjQ2NQolJUVPRgo='
  constructor(private renderer: Renderer2, private ngZone: NgZone,private router:Router) {}
  ngAfterViewInit(): void {

  }

   // Handle print functionality
   customPrintHandler(): void {

    // const iframe = document.querySelector('iframe[title="ng
      const iframe = document.querySelector('iframe[title="ng2-pdfjs-viewer"]') as HTMLIFrameElement;

      if (iframe && iframe.src) {
        const viewerUrl = iframe.src;
        const urlParams = new URLSearchParams(viewerUrl.split('?')[1]);
        const fileParam = urlParams.get('file');

        if (!fileParam) {
          alert('Unable to extract PDF file path.');
          return;
        }

        const pdfPath = `assets/pdfjs/web/${fileParam}`;
        const newWindow = window.open(pdfPath, '_blank');
        if (newWindow) {
          setTimeout(() => {
            console.log('Triggering print');
            newWindow.alert("triggering print")
            newWindow.focus();
            newWindow.print();

          }, 500);
        } else {
          console.log('Popup blocked!');
          alert('Popup blocked. Please allow pop-ups for this site.');
        }

      } else {
        alert('Unable to access the PDF for printing on mobile.');
      }
    }





    navigatetoExtended()
    {
    this.router.navigate(['/extended'])
    }


  onPdfViewerLoaded(pagesCount: number): void {
    console.log('PDF Loaded with pages:', pagesCount);
    console.log(this.isMobile())
  }


     previewPdf1() {

this.showPdf = true;
  this.showPdf2 = false;
if(this.isMobile())
{
   const intervalId = setInterval(() => {
     const iframe = document.querySelector('iframe');
    const printButton = iframe?.contentDocument?.getElementById('secondaryPrint');

    if (iframe && printButton && this.isMobile()) {
      console.log("Print button found");

      // Clone and replace to remove ALL previous event listeners
      const clone = printButton.cloneNode(true) as HTMLElement;
      printButton.replaceWith(clone);

      // Attach custom logic at the CAPTURE phase
      clone.addEventListener(
        'click',
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          alert("✅ Custom print logic executed only!");
          this.customPrintHandler();
        },
        true // <-- capture phase, so we intercept BEFORE PDF viewer
      );

      clearInterval(intervalId);
    }
  }, 300);

  // Optional safety timeout
  setTimeout(() => clearInterval(intervalId), 5000);
}
    }
    isMobile(): boolean {
      const userAgent = navigator.userAgent || navigator.vendor;

  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isSmallScreen = window.innerWidth < 768;

  return isMobileUA && isSmallScreen;
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

      //  const pdf = new jsPDF();
      //  pdf.text('Hello, World from jsPDF!', 10, 10);

      //  // Create blob
      //  const pdfBlob = pdf.output('blob');

      //  // Create a URL for that blob
      //  const pdfBlobUrl = URL.createObjectURL(pdfBlob);

      //  // Assign to the pdf viewer
      //  this.pdfSrc2 = pdfBlobUrl;
      //  this.showPdf=false
      //  this.showPdf2 = true;

      const pdf = new jsPDF();
  pdf.text('Hello, World from jsPDF!', 10, 10);
  const pdfBlob = pdf.output('blob');
  const pdfBlobUrl = URL.createObjectURL(pdfBlob);

  if (this.isMobile()) {
    const newTab = window.open(pdfBlobUrl, '_blank');
    if (newTab) {
      setTimeout(() => {
        newTab.print(); // This may work on some Android browsers
      }, 1000);
    } else {
      alert('Please allow popups for this website to print the PDF.');
    }
  } else {
    this.pdfSrc2 = pdfBlobUrl;
    this.showPdf = false;
    this.showPdf2 = true;
  }
   }
}