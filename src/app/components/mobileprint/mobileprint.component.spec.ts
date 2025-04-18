import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileprintComponent } from './mobileprint.component';

describe('MobileprintComponent', () => {
  let component: MobileprintComponent;
  let fixture: ComponentFixture<MobileprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileprintComponent]
    });
    fixture = TestBed.createComponent(MobileprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
