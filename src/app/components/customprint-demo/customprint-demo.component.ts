

import { Component } from '@angular/core';
import { customPrint } from 'src/app/utils/custom_print';
import printJS from 'print-js';
@Component({
  selector: 'app-customprint-demo',
  templateUrl: './customprint-demo.component.html',
  styleUrls: ['./customprint-demo.component.css']
})
export class CustomprintDemoComponent {
  pdfSrc: string = 'cy.pdf';
  printPdf() {
    // printJS({
    //   printable: '/assets/pdfjs/web/cy.pdf',
    //   type: 'pdf',
    //    showModal: true, // Show a loading modal while the PDF is preparing
    //   modalMessage: 'Loading PDF...',

    //   documentTitle: 'Print Document',
    // });
    customPrint("assets/pdfjs/web/cy.pdf")
  }
}
