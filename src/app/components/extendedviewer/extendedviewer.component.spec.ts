import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedviewerComponent } from './extendedviewer.component';

describe('ExtendedviewerComponent', () => {
  let component: ExtendedviewerComponent;
  let fixture: ComponentFixture<ExtendedviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtendedviewerComponent]
    });
    fixture = TestBed.createComponent(ExtendedviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
