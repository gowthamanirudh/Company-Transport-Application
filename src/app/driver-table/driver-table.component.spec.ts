import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTableComponent } from './driver-table.component';

describe('DriverTableComponent', () => {
  let component: DriverTableComponent;
  let fixture: ComponentFixture<DriverTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriverTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
