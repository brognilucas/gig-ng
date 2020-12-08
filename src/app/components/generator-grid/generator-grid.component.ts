import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GridService } from 'src/app/services/grid.service';

@Component({
  selector: 'app-generator-grid',
  templateUrl: './generator-grid.component.html',
  styleUrls: ['./generator-grid.component.css'],
})
export class GeneratorGridComponent {
  constructor(public gridService: GridService) {}

  @ViewChild('input') input;

  lastTime = Date.now();

  form: FormGroup;

  character: string = '';

  lastCharacter = null;

  disabled: boolean = false;

  matrix;

  validateLastInput(character) {
    if (this.lastCharacter !== character) {
      return true;
    }

    alert('Repeated character');
    return false;
  }

  timeoutDisableInput(){ 
    setTimeout(() => {
      this.disabled = false;
      this.character = '';
    }, 4000);
  }

  setWeightedString({ target }) {
    let character = target.value;

    if (character.length && this.validateLastInput(character)) {

      this.gridService.weightedString = character;
      this.lastTime = Date.now();

      this.lastCharacter = character;
      this.disabled = true;
    
      this.timeoutDisableInput();
    } else {
      this.character = '';
    }
  }

  startGrid() {
    this.gridService.startPopulation();
  }

  getMatrix() {
    return this.gridService.getMatrix();
  }

  isGridStarted() {
    return this.gridService.started;
  }
}
