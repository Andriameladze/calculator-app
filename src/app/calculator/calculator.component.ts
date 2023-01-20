import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  showValue = '0';
  currentValue = '';

  inputValue(value: string) {
    if (this.currentValue == '0') {
      this.currentValue = value;
    } else if (this.currentValue != '0') {
      this.currentValue = this.currentValue + value;
    }
    this.showValue = this.currentValue;
  }

  clearValue() {
    this.showValue = '0';
    this.currentValue = '';
  }

  negativeToggle() {
    this.currentValue = `${+this.currentValue * -1}`;
    this.showValue = this.currentValue;
  }

  equals() {
    if (this.showValue.includes('%')) {
      this.showValue = eval(this.currentValue.replace('%', '*0.01'));
    } else {
      this.showValue = eval(this.currentValue);
    }
    this.currentValue = this.showValue;
  }
}
