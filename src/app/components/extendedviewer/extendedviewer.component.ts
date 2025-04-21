import { Component } from '@angular/core';

@Component({
  selector: 'app-extendedviewer',
  templateUrl: './extendedviewer.component.html',
  styleUrls: ['./extendedviewer.component.css']
})
export class ExtendedviewerComponent {
  public page = 5;

  public pageLabel!: string;
}
