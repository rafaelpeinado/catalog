import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { CompoundInterestCalculatorComponent } from './compound-interest-calculator/compound-interest-calculator.component';
import { AppsComponent } from './apps.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppsComponent,
    CompoundInterestCalculatorComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AppsModule { }
