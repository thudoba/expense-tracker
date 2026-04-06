import { Component } from '@angular/core';
import { ExpenseService } from '../expense-service';
import { Expense } from '../expense';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  imports: [CommonModule],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {

  expenses!: Expense[];

  constructor(public expenseService: ExpenseService){
    this.expenses = this.expenseService.expenses$();
  }
}
