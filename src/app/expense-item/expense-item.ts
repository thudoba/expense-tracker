import { Component, Input } from '@angular/core';
import { ExpenseService } from '../expense-service';
import { Expense, categoryColors } from '../expense';
import { CommonModule } from '@angular/common';
import { ExpenseList } from '../expense-list/expense-list';

@Component({
  selector: 'app-expense-item',
  imports: [CommonModule],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {

  @Input() expense!: Expense;
  
   categoryColors = categoryColors;
   
   constructor(private expenseService: ExpenseService){}

   deleteExpense(){
    this.expenseService.deleteExpense(this.expense.id)
   }

}
