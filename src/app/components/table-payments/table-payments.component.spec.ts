import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TablePaymentsComponent } from './table-payments.component';

describe('TablePaymentsComponent', () => {
  let component: TablePaymentsComponent;
  let fixture: ComponentFixture<TablePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should table be rendered if payments were informed ' , () => { 
    component.payments = [{ mock: 'mock data'}]; 
    
    expect(fixture.debugElement.query(By.css('table'))).toBeDefined();
  })

  it('Should not show a table if payments length was 0 ', () => { 
    component.payments = []; 
    
    expect(fixture.debugElement.query(By.css('table'))).toBeNull();
  })
});
