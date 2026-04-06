import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { AddExpense } from './add-expense/add-expense';
import { ExpenseList } from './expense-list/expense-list';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'add', component: AddExpense},
    {path: 'expenses', component: ExpenseList}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
