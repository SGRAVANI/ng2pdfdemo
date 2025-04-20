import { Component ,ViewChild} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-minimalistic-config',
  templateUrl: './minimalistic-config.component.html',
  styleUrls: ['./minimalistic-config.component.css']
})
export class MinimalisticConfigComponent {
  @ViewChild('pdfViewer') public pdfViewer:any;
  constructor(private http: HttpClient) {
    let url = "api/document/getmypdf";
    this.downloadFile(url).subscribe(
        (res:any) => {
            this.pdfViewer.pdfSrc = res; // pdfSrc can be Blob or Uint8Array
            this.pdfViewer.refresh(); // Ask pdf viewer to load/refresh pdf
        }
    );
}

private downloadFile(url: string): any {
    return this.http.get(url, { responseType: 'blob' })
        .pipe(
            map((result: any) => {
                return result;
            })
        );
}


}
