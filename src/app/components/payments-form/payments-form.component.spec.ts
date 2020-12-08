import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { PaymentsFormComponent } from './payments-form.component';

describe('PaymentsFormComponent', () => {
  let component: PaymentsFormComponent;
  let fixture: ComponentFixture<PaymentsFormComponent>;
  let mock = { payment: 'payment', amount: 30 };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentsFormComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should form to submit the value when submitForm() is called', async () => {
    spyOn(component.submit, 'emit').and.callThrough();

    component.form.patchValue(mock);

    component.submitForm();
    await fixture.whenStable();

    expect(component.submit.emit).toHaveBeenCalledWith(mock);
  });

  it('Should btn be disabled if form is not filled ', () => {
    const btn = fixture.debugElement.query(By.css('button'));

    expect(btn.nativeElement.disabled).toBeTrue();
  });

  it('Should reset form when submitForm', () => {
    spyOn(component.form, 'reset');

    component.submitForm();

    expect(component.form.reset).toHaveBeenCalled();
  });
});
