import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  private matrix: Array<Array<string>>;
  private code: string;

  public subjectCode: Subject<string> = new Subject();
  public started: boolean = false;
  public weightedString: string = '';

  constructor() {}

  startMatrix() {
    let matrix = new Array(10);

    for (var i = 0; i < matrix.length; i++) {
      matrix[i] = new Array(10);
    }

    return matrix;
  }

  setMatrix(matrix) {
    this.matrix = matrix;
  }

  startPopulation() {
    this.populateMatrix();
    setInterval(() => {
      this.populateMatrix();
    }, 2000);
  }

  populateMatrix() {
    let matrix = this.startMatrix();
    this.started = true;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let random = this.getRandomCharacter();

        if (this.shouldSetWeightedString() && this.weightedString.length) {
          matrix[i][j] = this.weightedString;
        } else {
          matrix[i][j] = random;
        }
      }

      this.setMatrix(matrix);
    }

    this.setCode();
  }

  shouldSetWeightedString() {
    let percent = 20;
    return Math.ceil(Math.random() * 1 * 100) <= percent;
  }

  getRandomCharacter() {
    return String.fromCharCode(Math.ceil(Math.random() * (122 - 97) + 97));
  }

  getDigits() {
    return new Date().toLocaleTimeString().substring(6);
  }

  setCode() {
    let digits = this.getDigits();

    const first = this.matrix[digits[0]][digits[1]];
    const second = this.matrix[digits[1]][digits[0]];

    let code = [first, second]
      .map((item) => {
        return this.getOccurrencies(item);
      })
      .toString()
      .replace(',', '');

    this.code = code;

    this.subjectCode.next(this.code);
  }

  getOccurrencies(digit) {
    let count = 0;
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (this.matrix[i][j] === digit) {
          count++;
        }
      }
    }

    if (count <= 9) {
      return count;
    }

    let result = 0;
    let doCounter = 1;

    do {
      result = count / doCounter;

      doCounter++;
    } while (result > 9);

    return Math.round(result);
  }

  getMatrix() {
    return this.matrix;
  }

  getCode() {
    return this.code;
  }

  countItemsGrid(grid) {
    let total = 0;

    for (let item of grid) {
      if (Array.isArray(item)) {
        total += item.length;
      } else {
        total++;
      }
    }

    return total;
  }
}
