import { Component, OnInit } from '@angular/core';
import { GridService } from 'src/app/services/grid.service';

@Component({
  selector: 'live-code',
  templateUrl: './live-code.component.html',
  styleUrls: ['./live-code.component.css'],
})
export class LiveCodeComponent {
  code: string;
  constructor(public gridService: GridService) {
    this.monitorCode();
  }

  monitorCode() {
    this.gridService.subjectCode.subscribe((code) => {
      this.code = code;
    });
  }
}
