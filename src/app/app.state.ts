import { Expense } from "./Domain/expense";

export interface AppState {
    expenseStore: Expense[];
}