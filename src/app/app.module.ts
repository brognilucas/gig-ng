import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { GeneratorGridComponent } from './components/generator-grid/generator-grid.component';
import { GridComponent } from './components/grid/grid.component';
import { LiveCodeComponent } from './components/live-code/live-code.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { GridService } from './services/grid.service';
import { PaymentService } from './services/payment.service';
import { TablePaymentsComponent } from './components/table-payments/table-payments.component';
import { PaymentsFormComponent } from './components/payments-form/payments-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorGridComponent,
    GridComponent,
    LiveCodeComponent,
    PaymentsComponent,
    TablePaymentsComponent,
    PaymentsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [GridService, PaymentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
