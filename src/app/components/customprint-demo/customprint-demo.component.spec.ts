import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomprintDemoComponent } from './customprint-demo.component';

describe('CustomprintDemoComponent', () => {
  let component: CustomprintDemoComponent;
  let fixture: ComponentFixture<CustomprintDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomprintDemoComponent]
    });
    fixture = TestBed.createComponent(CustomprintDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
