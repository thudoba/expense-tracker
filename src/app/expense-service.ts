import { computed, Injectable, signal } from '@angular/core';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses = signal<Expense[]>([
    {id: '1', title: 'beverages', amount: 10, category: 'Grocery'},
    {id: '2', title: 'gas', amount: 55, category: 'Travel'}
  ]);

  expenses$ = this.expenses.asReadonly();


  total = computed(() =>
    this.expenses().reduce((sum, e) => sum + e.amount, 0)
);
  count = computed(() =>
    this.expenses().length
);
addExpense(expense: Expense){
  this.expenses.update(current => [...current, expense]);
}
}
