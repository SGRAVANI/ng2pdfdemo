import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobpdfComponent } from './blobpdf.component';

describe('BlobpdfComponent', () => {
  let component: BlobpdfComponent;
  let fixture: ComponentFixture<BlobpdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlobpdfComponent]
    });
    fixture = TestBed.createComponent(BlobpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
