import { TestBed } from '@angular/core/testing';

import { GridService } from './grid.service';

describe('GridService', () => {
  let service: GridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should count items grid return the right size' , () => { 
    let matrix1 = new Array(8).fill(Array(8));
    let arr = new Array(10);
    expect(service.countItemsGrid(matrix1)).toBe(64);
    expect(service.countItemsGrid(arr)).toBe(10)
  })

  it('should startMatrix() set matrix return an matrix with 100 items', () => {
    let matrix = service.startMatrix();

    expect(service.countItemsGrid(matrix)).toBe(100);
  });

  it('Should getRandomCharacter return a string' , () => { 

    expect(typeof service.getRandomCharacter()).toEqual('string')
  })

  it('Should shouldSetWeightedString() return a boolean ', () => { 
    expect(typeof service.shouldSetWeightedString()).toBe('boolean')
  })

  it('Should populateMatrix() populate the matrix and call the setCode method' , () => { 
    expect(service.getMatrix()).not.toBeDefined();
    spyOn(service, 'setCode').and.callThrough(); 


    service.populateMatrix();

    expect(service.getMatrix()[0][0]).not.toBeUndefined();
    expect(service.setCode).toHaveBeenCalled()
  })

  it('Should code be an string after the population is over' , () => { 
    expect(service.getCode()).not.toBeDefined();

    service.populateMatrix();

    expect(service.getCode()).not.toBeUndefined()
    expect(typeof service.getCode()).toBe('string')
  })
  
});
