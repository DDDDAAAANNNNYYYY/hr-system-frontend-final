import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaStatusMgmtComponent } from './visa-status-mgmt.component';

describe('VisaStatusMgmtComponent', () => {
  let component: VisaStatusMgmtComponent;
  let fixture: ComponentFixture<VisaStatusMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaStatusMgmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaStatusMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
