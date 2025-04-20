import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  standalone: false,
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  isPdfLoaded = false;
  zoom = 'auto';
  @ViewChild('bigPdfViewer', { static: true }) public bigPdfViewer:any;
  constructor() { }

  ngOnInit() {
  }

  public testBeforePrint() {
    console.log('testBeforePrint() successfully called');
    console.log(this.bigPdfViewer.page);
    this.bigPdfViewer.page = 3;
    console.log(this.bigPdfViewer.page);
  }

  public testAfterPrint() {
    console.log('testAfterPrint() successfully called');
  }

  public testPagesLoaded(count: number) {
    console.log('testPagesLoaded() successfully called. Total pages # : ' + count);
  }

  public testPageChange(pageNumber: number) {
    console.log('testPageChange() successfully called. Current page # : ' + pageNumber);
  }
}