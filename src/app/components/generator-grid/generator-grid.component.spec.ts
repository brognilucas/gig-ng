import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GridService } from 'src/app/services/grid.service';

import { GeneratorGridComponent } from './generator-grid.component';

describe('GeneratorGridComponent', () => {
  let component: GeneratorGridComponent;
  let fixture: ComponentFixture<GeneratorGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneratorGridComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should setWeightedString validate character ', () => {
    spyOn(component, 'validateLastInput').and.callThrough();

    component.lastCharacter = 'a';
    component.setWeightedString({ target: { value: 'a' } });

    expect(component.validateLastInput).toHaveBeenCalled();
  });

  it('Should start grid call startPopulation', () => {
    spyOn(component.gridService, 'startPopulation').and.callThrough();

    component.startGrid();

    expect(component.gridService.startPopulation).toHaveBeenCalled();
  });
});
