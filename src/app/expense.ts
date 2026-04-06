export interface Expense {
    id: string
    title: string
    amount: number
    category: ExpenseCategory
}

export type ExpenseCategory = 
    | 'School'
    | 'Personal'
    | 'Grocery'
    | 'Utilities'
    | 'Shopping'
    | 'Travel'
    | 'Food';


