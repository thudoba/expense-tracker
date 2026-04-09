import { Component } from '@angular/core';
import { ExpenseService } from '../expense-service';
import { Expense } from '../expense';
import { CommonModule } from '@angular/common';
import { ExpenseItem } from '../expense-item/expense-item';

@Component({
  selector: 'app-expense-list',
  imports: [CommonModule, ExpenseItem],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {

  expenses: Expense[] = [];

  constructor(public expenseService: ExpenseService){
    this.expenses = this.expenseService.expenses$();
  }
}
