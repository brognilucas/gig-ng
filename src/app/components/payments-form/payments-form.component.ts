import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'payments-form',
  templateUrl: './payments-form.component.html',
  styleUrls: ['./payments-form.component.css'],
})
export class PaymentsFormComponent {
  form: FormGroup;

  @Input() disabled;

  @Output()
  submit: EventEmitter<any> = new EventEmitter();

  constructor(protected fb: FormBuilder) {
    this.form = this.fb.group({
      payment: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  submitForm() {
    this.submit.emit(this.form.value);

    this.form.reset();
  }
}
