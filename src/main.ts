import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { AddExpense } from './app/add-expense/add-expense';
import { DashboardComponent } from './app/dashboard-component/dashboard-component';
import { ExpenseList } from './app/expense-list/expense-list';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add', component: AddExpense },
      { path: 'expenses', component: ExpenseList },
    ])
  ]
}).catch((err) => console.error(err));