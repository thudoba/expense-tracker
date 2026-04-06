import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../expense-service';
import { ExpenseCategory } from '../expense';
import { ExpenseList } from '../expense-list/expense-list';
import { Expense } from '../expense';

@Component({
  selector: 'app-add-expense',
  imports: [FormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {
title = ''
amount = 0
categories: ExpenseCategory[] = ['School','Personal','Grocery','Utilities','Shopping','Travel','Food']; 
category: ExpenseCategory | '' = '';

constructor(public expenseService: ExpenseService){}

addExpense(){


  const newExpense: Expense = {

    id: (this.expenseService.count()+1).toString(),
    title: this.title,
    amount: this.amount,
    category: this.category as ExpenseCategory
  };
  this.expenseService.addExpense(newExpense);

  this.title = '';
  this.amount = 0;
  this.category;  
}}

