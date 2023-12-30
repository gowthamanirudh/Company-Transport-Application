import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtransportComponent } from './etransport.component';

describe('EtransportComponent', () => {
  let component: EtransportComponent;
  let fixture: ComponentFixture<EtransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtransportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
