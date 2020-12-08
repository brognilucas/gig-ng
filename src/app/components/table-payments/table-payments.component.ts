import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table-payments',
  templateUrl: './table-payments.component.html',
  styleUrls: ['./table-payments.component.css']
})
export class TablePaymentsComponent {

    @Input() payments = [];

}
