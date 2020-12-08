import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsComponent } from './payments.component';

describe('PaymentsComponent', () => {
  let component: PaymentsComponent;
  let fixture: ComponentFixture<PaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be able to set an payment', () => {
    spyOn(component.grid, 'getCode').and.callFake(() => '20');

    let mockMatrix =  new Array(10).fill(Array(10))
    spyOn(component.grid, 'getMatrix').and.callFake(() =>
     mockMatrix
    );

    spyOn(component.paymentService, 'setPayment').and.callThrough()
    
    let mockPayment = { payment: 'Payment 1', amount: 20 };
    
    component.addPayment(mockPayment);

    expect(component.grid.getCode).toHaveBeenCalled();
    expect(component.grid.getMatrix).toHaveBeenCalled();

    expect(component.paymentService.setPayment).toHaveBeenCalledWith({ 
      code: '20', 
      matrix: mockMatrix,
      totalSize: 100,
      ...mockPayment
    })
  });

  it('Should hasCode be true when code return a string' , () => { 
    spyOn(component.grid, 'getCode').and.callFake(() => '10');

    expect(component.hasCode()).toBeTruthy()
  }); 

  it('Should hasCode be false when code is not initialized' , () => { 
    spyOn(component.grid, 'getCode').and.callFake(() => null);

    expect(component.hasCode()).toBeFalse();
  }) 

  it('Should get payments get an array' , () => { 
    expect(Array.isArray(component.getPayments())).toBeTrue()
  })

});
