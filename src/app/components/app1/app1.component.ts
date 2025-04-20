import { Component,AfterViewInit,ViewChild} from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component {
  @ViewChild('inlinePdfViewer', { static: true }) public inlinePdfViewer:any;
  isPdfLoaded = false;

  constructor() { }

  ngAfterViewInit() {}
}
