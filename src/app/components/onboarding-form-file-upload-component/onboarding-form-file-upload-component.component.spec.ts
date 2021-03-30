import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingFormFileUploadComponentComponent } from './onboarding-form-file-upload-component.component';

describe('OnboardingFormFileUploadComponentComponent', () => {
  let component: OnboardingFormFileUploadComponentComponent;
  let fixture: ComponentFixture<OnboardingFormFileUploadComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingFormFileUploadComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingFormFileUploadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
