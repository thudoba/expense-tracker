import { computed, Injectable, signal } from '@angular/core';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses = signal<Expense[]>([
    
  ]);

  expenses$ = this.expenses.asReadonly();


  total = computed(() =>
    this.expenses().reduce((sum, e) => sum + e.amount, 0)
);
  count = computed(() =>
    this.expenses().length
);
  avg = computed(() =>
    this.count() ? this.total() / this.count() : 0
);
  highest = computed(() => {
  const currentExpenses = this.expenses();
  return currentExpenses.length ? Math.max(...currentExpenses.map(e => e.amount)) : 0
  
})
addExpense(expense: Expense){
  this.expenses.update(current => [...current, expense]);
};
deleteExpense(id: string){
  this.expenses.update(current => current.filter(e => e.id !== id));
};
}
