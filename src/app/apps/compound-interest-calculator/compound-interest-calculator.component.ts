import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-compound-interest-calculator',
  templateUrl: './compound-interest-calculator.component.html',
  styleUrls: ['./compound-interest-calculator.component.css']
})
export class CompoundInterestCalculatorComponent implements OnInit {


  initialValue: number = 0;
  monthlyContribution: number = 0;
  result: number = 0;
  monthlyInterestRate: number = 0;
  numberMonths: number = 0;
  accruedInterest: number = 0;
  totalContribution: number = 0;
  formCICalculator!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm(): void {
    this.formCICalculator = this.formBuilder.group({
      initialValue: [''],
      monthlyContribution: [''],
      monthlyInterestRate: [''],
      numberMonths: ['']
    });
  }


  teste(): void {
    this.result = 0;
    this.accruedInterest = 0;
    this.totalContribution = 0;

    this.initialValue = this.formCICalculator.get('initialValue').value;
    this.monthlyContribution = this.formCICalculator.get('monthlyContribution').value;
    this.monthlyInterestRate = this.formCICalculator.get('monthlyInterestRate').value;
    this.numberMonths = this.formCICalculator.get('numberMonths').value;
    
    this.accruedInterest = this.initialValue * parseFloat(Math.pow((1 + this.monthlyInterestRate/100), this.numberMonths).toFixed(14)) - this.initialValue;
    this.totalContribution = this.initialValue;
    let i = this.numberMonths - 1;
    while (i > 0) {
      this.accruedInterest += ((this.monthlyContribution * parseFloat(Math.pow((1 + this.monthlyInterestRate/100), i).toFixed(14))) - this.monthlyContribution);
      this.totalContribution += this.monthlyContribution;
      i--;
    }
    this.totalContribution += this.monthlyContribution;
    this.result = parseFloat((this.totalContribution + this.accruedInterest).toFixed(2));
    this.accruedInterest = parseFloat(this.accruedInterest.toFixed(2));
  }

}
