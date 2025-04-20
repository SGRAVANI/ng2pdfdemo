import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalisticConfigComponent } from './minimalistic-config.component';

describe('MinimalisticConfigComponent', () => {
  let component: MinimalisticConfigComponent;
  let fixture: ComponentFixture<MinimalisticConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinimalisticConfigComponent]
    });
    fixture = TestBed.createComponent(MinimalisticConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
