import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {
  firstNumber: number = 0;
  secondNumber: number = 0;
  operation: string = '+';
  result: number = 0;
  history: { time: string; operation: string; result: number }[] = [];

  calculate() {
    switch (this.operation) {
      case '+':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.result = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.result = this.secondNumber !== 0 ? this.firstNumber / this.secondNumber : 0;
        break;
    }

    this.history.push({
      time: new Date().toLocaleString(),
      operation: `${this.firstNumber} ${this.operation} ${this.secondNumber}`,
      result: this.result
    });
  }

  deleteEntry(entry: any) {
    this.history = this.history.filter(e => e !== entry);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
