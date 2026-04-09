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

export const categoryColors: Record<ExpenseCategory, string> = {
    School: 'blue',
    Personal: 'red',
    Grocery: 'purple',
    Utilities: 'orange',
    Shopping: 'green',
    Travel: 'brown',
    Food: 'pink',
};


