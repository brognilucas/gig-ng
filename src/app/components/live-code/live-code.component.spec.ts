import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LiveCodeComponent } from './live-code.component';

describe('LiveCodeComponent', () => {
  let component: LiveCodeComponent;
  let fixture: ComponentFixture<LiveCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should code be updated ' , () => { 
    component.monitorCode();
    
    component.gridService.subjectCode.next('20'); 
    expect(component.code).toBe('20'); 

    component.gridService.subjectCode.next('30'); 
    expect(component.code).toBe('30'); 

  })
});
