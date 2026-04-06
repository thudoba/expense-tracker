import { Component, Input, input, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ExpenseService } from './expense-service';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { AddExpense } from './add-expense/add-expense';
import { ExpenseList } from './expense-list/expense-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent, AddExpense, ExpenseList, RouterModule, CommonModule],
  template: `
  <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand">Expense Tracker</a>
  <div class="form-inline">
    <a class="btn btn-light mr-2" routerLink="/dashboard">Dashboard</a>
    <a class="btn btn-light mr-2" routerLink="/add">Add Expense</a>
    <a class="btn btn-light" routerLink="/expenses">View Expenses</a>
  </div>
</nav>
<div class="container mt-3">
  <router-outlet></router-outlet>
</div>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('expense-tracker');
  constructor(public expenseService: ExpenseService) {}
}

